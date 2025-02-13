'use client'
import { useState } from "react";
import Navbar from "../components/navigation/nav";
import Footer from "../components/footer/page";
import Image from "next/image";

export default function Skills() {
  //Create a state to track if skills are shown
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setShowBackEnd] = useState(false);

  //This function handles the click event - front end
  const toggleFrontend = () => {
    setShowFrontEnd((prevState) => !prevState);
  }
  //This function handles the click event for back end 
  const toggleBackend = () => {
    setShowBackEnd((prevState) => !prevState);
  }


  // export default function Skills() {
  return (
    <>
      <div className="flex flex-col p-6 sticky top-1">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-items-center p-6 sm:p-18 font-[family-name:var(--font-geist-sans)]">{/*Overall fomatting*/}

        <div className="flex flex-wrap gap-8 row-start-2 items-center sm:items-start">

          <p className="text-xl text-center sm:text-left">
            Click on the category of skills below to view the areas i cover over the years and view the timeline which shows a description of what was learnt. Through 
            being exposed to DevOps, i have understand the agile methodology where i worked in teams to build applications integrating management tools such as Jira boards
            and .....
          </p>
        </div>

        <div className="flex flex-wrap mt-10 gap-10 ">
          {/* This button togggles visibility of Front End only */}
          <button onClick={toggleFrontend} className="text-2xl group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          > FRONT END 
          </button>
          <button onClick={toggleBackend} > Back End</button>
          {showFrontEnd && (
            <div> {/*Front end skills */}
            <br/>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 border border-blue-400">TailWind</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">HTML</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">CSS</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">JS</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">REACT</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">REACT Native</span>
              {/* <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Purple</span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Pink</span> */}
            </div>
          )}
          {/* End of front end skills */}



          {/*List out Backend skills here */}
          {showBackEnd && (
            <div>
              <br />
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 border border-blue-400">IaC_TERRAFORM</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">NODE.js</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">MySQL</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">AWS</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Microsoft SQL Server</span>
              {/* <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Indigo</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Purple</span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Pink</span> */}
            </div>
          )}
        </div>

      </div> {/*End overall formatting*/}


      {/*A random Button  */}
      <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex">
        <div className="flex items-center">
          <span className="ml-1 text-teal-600 text-xl lg:inline p-1 font-bold rounded-lg group-hover:text-yellow-400 ">New BACK END</span>
        </div>
        <div className="ml-2 flex items-center gap-1 text-sm md:flex">
          {/* <svg
      className="size-10 text-gray-500 transition-all duration-200 group-hover:text-yellow-300"
      data-slot="icon"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        fill-rule="evenodd"
      ></path>
    </svg> */}
          <Image 
            alt="dev image"
            src="/backend.svg"
            width={40}
            height={20}
          />

        </div>
      </button> 
      {/*End Random button*/}



      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </>
  );

}

