'use client'
import Image from "next/image";
import Navbar from "./components/navigation/nav";
import Footer from "./components/footer/page";
import React from "react";
import { Provider } from "react-redux";
import store from './components/redux/store';
import ThreeDCarousel from "./slider/page";

export default function Home() {
  return (

    <>
      <Provider store={store}>
        <div className="flex flex-col p-6 sticky top-1 z-50 bg-white/04 dark:bg-gray-800 backdrop-blur-md">
          <Navbar />
        </div>

        <div className="flex flex-col justify-center px-10 gap-5 font-[family-name:var(--font-geist-sans)]">

          <div>
            <ThreeDCarousel/>
            {/* <Slider /> */}
          </div>

          <div className="flex text-center justify-center items-center mb-4 layout=responsive">

            <p className="text-xl sm:text-center font-[family-name:var(--font-geist-mono)]">

              Hello there, I am <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
          from-yellow-500 via-orange-300 to-teal-600 ">
                Mickael,</span> and this is <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
          from-teal-500 via-orange-300 to-yellow-600"> my portfolio</span>! <br /> I've begun the journey of using Next.js
              to develop this simple UI front-end for extra practice and to have some fun while doing it. It's
              integrating <span className="underline bg-clip-text text-transparent bg-gradient-to-r 
          from-yellow-500 via-orange-300 to-teal-600 ">Tailwind</span> into this project, and I will do some awesome integration with it in time to come.
            </p>

          </div>

          <div className="flex sm:flex-row gap-4 justify-center items-center mt-0">

            <a
              className="rounded-full flex items-center justify-center bg-foreground text-background gap-2 font-semibold px-4 hover:text-teal-600 text-m sm:text-base h-10 sm:h-12 sm:p-5"
              href="/contact"
              rel="noopener noreferrer"
            >
              <Image
                className="light bg-yellow-300 dark:bg-[#ededed]"
                src="/contacticon.svg"
                alt="contact"
                width={20}
                height={20}
              />
              Contact
            </a>

            <a href="https://www.dropbox.com/scl/fi/1l9wga7691gn53ral5ebu/Resume-M.-Walters.docx?rlkey=c2jts3umu2l8ncuzcj2f9y6ct&st=8m1vb8at&dl=0" target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex border border-solid items-center mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold sm:h-12 text-yellow-300 px-6 py-2 hover:bg-teal-600">
                Resume
              </button>
            </a>
          </div>

          <div className="flex items-center justify-center">
            <Footer />
          </div>

        </div>
      </Provider>
    </>
  );
}