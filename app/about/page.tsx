'use client'
import { useState, useEffect } from "react";
import Footer from "../components/footer/page";
import Navbar from "../components/navigation/nav";
import Infocard from "../components/infocard/page";

export default function Skills() {
  const [isFaded, setIsFaded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {  // Change threshold for when to fade
      setIsFaded(true);  // Set the text to fade out
    } else {
      setIsFaded(false);  // Reset the text to be fully visible
    }
  };

  useEffect(() => {
    // Listen to scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col p-6 sticky top-0 z-50 bg-white/04 dark:bg-gray-800 backdrop-blur-md">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-items-center p-6 sm:p-18 font-[family-name:var(--font-geist-sans)]">
        <div
          className={`text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] transition-opacity duration-300 ease-in-out ${
            isFaded ? "opacity-0" : "opacity-100"
          }`}>
          I am passionate about using various technologies and tools to enhance my clients projects. <br />
          See more about me from my social links below, and don't be afraid to follow and leave a like.
        </div>
        <Infocard />
      </div>

      <div className="flex flex-col items-center justify-center">
        <Footer />
      </div>
    </>
  );
}
