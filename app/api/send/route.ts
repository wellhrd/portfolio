import { NextResponse } from "next/server";

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_ACTION = "contact-form";

type TurnstileVerification = {
  success: boolean;
  action?: string;
  "error-codes"?: string[];
};

function getClientIp(request: Request) {
  const cloudflareIp = request.headers.get("cf-connecting-ip");
  const forwardedIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  return cloudflareIp || forwardedIp;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = typeof body?.firstName === "string" ? body.firstName.trim() : "";
    const lastName = typeof body?.lastName === "string" ? body.lastName.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const turnstileToken =
      typeof body?.turnstileToken === "string" ? body.turnstileToken.trim() : "";

    if (!email || !message) {
      return NextResponse.json(
        { error: "Please provide your email and a message." },
        { status: 400 }
      );
    }

    if (!turnstileToken || turnstileToken.length > 2048) {
      return NextResponse.json(
        { error: "Please complete the verification and try again." },
        { status: 400 }
      );
    }

    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecretKey) {
      return NextResponse.json(
        { error: "Contact verification is not configured yet." },
        { status: 500 }
      );
    }

    const clientIp = getClientIp(request);
    const turnstileResponse = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: turnstileSecretKey,
        response: turnstileToken,
        ...(clientIp ? { remoteip: clientIp } : {}),
        idempotency_key: crypto.randomUUID(),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!turnstileResponse.ok) {
      console.error("Turnstile verification request failed:", turnstileResponse.status);
      return NextResponse.json(
        { error: "Unable to verify your request right now. Please try again." },
        { status: 502 }
      );
    }

    const verification = (await turnstileResponse.json()) as TurnstileVerification;

    if (!verification.success || verification.action !== TURNSTILE_ACTION) {
      console.warn("Turnstile verification rejected:", verification["error-codes"] ?? ["action-mismatch"]);
      return NextResponse.json(
        { error: "Verification failed. Please verify again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New contact form message from ${firstName || "a visitor"} ${lastName}`.trim(),
        html: `
          <h2>New portfolio contact message</h2>
          <p><strong>Name:</strong> ${safeFirstName} ${safeLastName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage.replace(/\n/g, "<br />")}</p>
        `,
        text: `New portfolio contact message\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend email error:", errorText);
      return NextResponse.json(
        { error: "Unable to send your message right now." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
