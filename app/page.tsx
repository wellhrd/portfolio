'use client'
import Image from "next/image";
import Navbar from "./components/navigation/nav";
import Footer from "./components/footer/page";
import Slider from "./slider/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center p-8 gap-10 font-[family-name:var(--font-geist-sans)]">

      <div className="sticky top-1 flex">
        <Navbar />
      </div>

      <div>
        <Slider />
      </div>

      <div className="flex text-center justify-center items-center h-2 mb-8">

        <p className="text-xl sm:text-left font-[family-name:var(--font-geist-mono)]">

          Hello there, I am <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
          from-yellow-500 via-orange-300 to-teal-600 ">
            Mickael</span> and this is <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
          from-teal-500 via-orange-300 to-yellow-600"> my portfolio</span>! <br /> I've begun the journey of using NEXTjs
          to develop this simple UI front end for extra practice and to have some fun while doing it. It's
          integrating <u> <b>tailwind </b></u> into this project and i will do some awesome integration with in time to come.
        </p>
      </div>
      
      <div className="flex gap-4 justify-center items-center  sm:flex-row mt-8">
        <a
          className="rounded-full flex items-center justify-center bg-foreground text-background gap-2 hover:text-teal-600 text-sm sm:text-base h-10 sm:h-12  sm:px-5"
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
        <a href="/skills"
          rel="noopener noreferrer"
        >
          <button className="border border-solid items-center mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold sm:h-12 text-yellow-300 px-6 py-2 hover:bg-teal-600">
            Resume
          </button>
        </a>
      </div>
      
      <div className="flex items-center justify-center">
        <Footer />
      </div>



    </div>
  );
}
