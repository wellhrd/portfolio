'use client'
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/navigation/nav";
import Footer from "../components/footer/page";

type TurnstileApi = {
    render: (
        container: HTMLElement,
        options: {
            sitekey: string;
            action: string;
            theme: "light" | "dark" | "auto";
            size: "normal" | "compact" | "flexible";
            callback: (token: string) => void;
            "expired-callback": () => void;
            "error-callback": (errorCode: string) => boolean | void;
        }
    ) => string;
    remove: (widgetId: string) => void;
    reset: (widgetId: string) => void;
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

function getTurnstileApi() {
    return (window as typeof window & { turnstile?: TurnstileApi }).turnstile;
}

function getTurnstileErrorMessage(errorCode: string) {
    if (errorCode === "110200") {
        return `This hostname (${window.location.hostname}) is not authorized in Cloudflare Turnstile.`;
    }

    if (["110100", "110110", "400020", "400070"].includes(errorCode)) {
        return "The Cloudflare Turnstile site key is invalid or disabled.";
    }

    if (["110600", "110620"].includes(errorCode)) {
        return "The verification timed out. Please refresh it and try again.";
    }

    if (errorCode === "200500") {
        return "The browser could not connect to Cloudflare. Check extensions or network filtering and try again.";
    }

    if (errorCode.startsWith("300") || errorCode.startsWith("600")) {
        return "The security check was unsuccessful. Try another browser or network.";
    }

    return "Verification failed to load. Please refresh and try again.";
}

export default function Contact() {
    const [isFaded, setIsFaded] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [turnstileToken, setTurnstileToken] = useState("");
    const turnstileContainerRef = useRef<HTMLDivElement>(null);
    const turnstileWidgetIdRef = useRef<string | null>(null);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFaded(true);
        } else {
            setIsFaded(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const renderTurnstile = useCallback(() => {
        const turnstile = getTurnstileApi();

        if (!turnstileSiteKey || !turnstile || !turnstileContainerRef.current || turnstileWidgetIdRef.current) {
            return;
        }

        turnstileWidgetIdRef.current = turnstile.render(turnstileContainerRef.current, {
            sitekey: turnstileSiteKey,
            action: "contact-form",
            theme: "light",
            size: "flexible",
            callback: (token) => {
                setTurnstileToken(token);
                setFeedback(null);
            },
            "expired-callback": () => {
                setTurnstileToken("");
                setFeedback({ type: "error", message: "Your verification expired. Please verify again." });
            },
            "error-callback": (errorCode) => {
                console.error("Turnstile client error:", errorCode);
                setTurnstileToken("");
                setFeedback({
                    type: "error",
                    message: `${getTurnstileErrorMessage(errorCode)} (Cloudflare code ${errorCode})`,
                });
                return true;
            },
        });
    }, []);

    useEffect(() => {
        return () => {
            const widgetId = turnstileWidgetIdRef.current;
            const turnstile = getTurnstileApi();

            if (widgetId && turnstile) {
                turnstile.remove(widgetId);
            }
        };
    }, []);

    const resetTurnstile = () => {
        setTurnstileToken("");

        const widgetId = turnstileWidgetIdRef.current;
        const turnstile = getTurnstileApi();

        if (widgetId && turnstile) {
            turnstile.reset(widgetId);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!turnstileToken) {
            setFeedback({ type: "error", message: "Please complete the verification before sending your message." });
            return;
        }

        setIsSubmitting(true);
        setFeedback(null);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, turnstileToken }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Unable to send your message.");
            }

            setFeedback({ type: "success", message: "Your message sent successfully. I’ll be in touch soon." });
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
            resetTurnstile();
        } catch (error) {
            setFeedback({
                type: "error",
                message: error instanceof Error ? error.message : "Unknown error occurred.",
            });
            resetTurnstile();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="flex flex-col p-6 sticky top-1 z-50 bg-white/04 dark:bg-gray-800 backdrop-blur-md">
                <Navbar />
            </div>

            <div className="flex flex-col items-center justify-items-center p-6 sm:p-18 font-[family-name:var(--font-geist-sans)]"> {/* Just for font styling of the entire page */}

                <div className="flex flex-col gap-4 md:flex-row md:space-x-8 px-4 md:px-8">
                    {/* Section 1 */}
                    <div className={`flex flex-col md:w-1/2 xl:gap-10 text-center basis-full md:basis-1/3 justify-center items-center transition-opacity duration-300 ease-in-out ${isFaded
                        ? "opacity-0" : "opacity-100"}`}>
                        <h2 className="text-lg font-bold overline decoration-teal-900">Feel free to contact me</h2>
                        <br />
                        <p>Let&apos;s tailor a service package that meets your needs and budget. Tell us a little about your business, and we will get back to you with some ideas and documentation as soon as possible.</p>
                        <br />
                        <div className="flex flex-col">
                            <a href="https://wa.me/18684705020" target="_blank">
                                <button className="flex items-center gap-2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-yellow-300 px-6 py-2">
                                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg>
                                    </span>
                                    Message me on WhatsApp
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col basis-full px-auto md:basis-2/3 justify-center items-center w-full max-w-3xl mx-auto mt-8 md:mt-0 bg-white rounded-lg text-gray-900 outline-dashed outline-teal-600 outline-2 md:outline-4">
                        {/* Start of form */}
                        <div className="flex flex-col mx-auto max-w-full text-center mb-4">
                            <h2 className="text-lg text-grey-900 font-bold underline decoration-teal-900">Contact form</h2>
                        </div>

                        <div className="flex flex-col items-center w-full">
                            <form onSubmit={handleSubmit} className="w-full max-w-xl">
                                <div className="flex flex-col gap-4 px-4 md:gap-6 md:px-6">
                                    <div className="flex flex-col w-full gap-4">
                                        <input
                                            className="bg-gray-200 rounded pl-2 w-full border border-gray-400 focus:border-teal-600 focus:outline-none"
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                        />
                                        <input
                                            className="bg-gray-200 rounded pl-2 w-full border border-gray-400 focus:border-teal-600 focus:outline-none"
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col w-full gap-4 px-4 md:px-6">
                                    <input
                                        className="bg-gray-200 rounded pl-2 w-full border border-gray-400 focus:border-teal-600 focus:outline-none peer"
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="name@iCloud.com"
                                    />
                                    <p className="mt-1 hidden peer-placeholder-shown:hidden peer-invalid:block text-pink-600">Please enter a valid email</p>
                                </div>
                                <br />
                                <div className="flex flex-col px-4 pb-2 md:px-6 md:pb-3 w-full">
                                    <textarea
                                        className="bg-gray-200 rounded pl-2 pt-1 w-full border border-gray-400 focus:border-teal-600 focus:outline-none"
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your message details..."
                                    ></textarea>
                                </div>

                                <div className="px-4 pb-4 md:px-6">
                                    {turnstileSiteKey ? (
                                        <>
                                            <Script
                                                src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                                                strategy="afterInteractive"
                                                onReady={renderTurnstile}
                                                onError={() => {
                                                    setTurnstileToken("");
                                                    setFeedback({ type: "error", message: "Verification failed to load. Please refresh and try again." });
                                                }}
                                            />
                                            <div ref={turnstileContainerRef} className="min-h-[65px] w-full" />
                                        </>
                                    ) : (
                                        <p className="rounded border border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
                                            Contact verification is not configured yet.
                                        </p>
                                    )}
                                </div>

                                {feedback ? (
                                    <div aria-live="polite" className={`mx-4 mb-4 rounded border px-4 py-3 text-sm md:mx-6 ${feedback.type === "success" ? "border-green-500 bg-green-50 text-green-700" : "border-red-500 bg-red-50 text-red-700"}`}>
                                        {feedback.message}
                                    </div>
                                ) : null}

                                <div className="flex justify-center items-center mt-4 w-full">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || !turnstileToken}
                                        className="flex block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-yellow-300 px-6 py-2 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {isSubmitting ? "Sending..." : "Hit me up - I'll call you!"}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div> {/* end entire font styling */}


            {/* Footer component  */}
            <div className="flex flex-col items-center justify-center">
                <Footer />
            </div>
        </>
    );
}
