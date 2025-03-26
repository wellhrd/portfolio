'use client'
import { useState, useEffect } from "react";
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

  //For when user scrolls the text diappear 
  const [isFaded, setIsFaded] = useState(false);
  const [opacity, setOpacity] = useState(1); // Fully visible

  const handleScroll = () => {
    // For smoother scroll
    const scrollPosition = window.scrollY;

    const calculatedOpacity = Math.max(0, Math.min(1, 1 - scrollPosition / 1000));
    setOpacity(calculatedOpacity);
    // if (window.scrollY > 100) {
    //   setIsFaded(true);
    // } else {
    //   setIsFaded(false);
    // }
  };

  useEffect(() => {
    //Listen for scroll
    window.addEventListener("scroll", handleScroll);

    //Tidy up listener when component is unmounted 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  // export default function Skills() {
  return (
    <>
      <div className="flex flex-col p-6 sticky top-1">
        <Navbar />
      </div>
      <div className="flex flex-col items-center justify-items-center p-6 sm:p-18 font-[family-name:var(--font-geist-sans)]">{/*Overall fomatting*/}


        <hr className="my-8 w-full h-1 bg-teal-600 border-0 rounded-sm dark:bg-yellow-300" />


        <div className="flex flex-wrap gap-8 p-6 row-start-2 items-center sm:items-start">

          <p className={`text-xl text-center sm:text-left transition-opacity duration-1000 ease-in-out`} style={{ opacity: opacity }} >
            {/* // ${isFaded ? "opacity-0" : "opacity-100"}`}> */}
            Explore the diverse skill sets I've developed over the years by clicking on the <b>Frontend</b> and <b>Backend</b> categories below.
            Each section features an interactive timeline that highlights the key milestones and what I've learned at each stage. <br />
            In <b> frontend development</b>, I've mastered building intuitive, responsive user interfaces using HTML, CSS, JavaScript, Tailwind, and modern frameworks like React.
            Through these projects, I've focused on delivering seamless, user-friendly experiences that adapt across devices. <br /><br />
            On the <b>backend</b>, I've gained expertise in server-side technologies such as Node.js, Python, and working with databases. My exposure to DevOps has also deepened my understanding of agile methodologies,
            where I've worked with cross-functional teams to develop and deploy applications efficiently. <br />
            Tools like Jira have allowed me to stay aligned with the team, while my experience in DevOps and backend systems ensures the applications I create are robust and scalable.
            This combination of frontend and backend skills has enabled me to create full-stack applications that are both functional and highly engaging.
          </p>
        </div>

        <div className="flex flex-col mt-10 gap-10 justify-center items-center sm:flex-col md:flex-row">

          {/* This button togggles visibility of Front End only */}
          <button onClick={toggleFrontend} className="text-2xl group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 sm:w-48 md:w-64 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          > FRONTEND
          </button>

          {/* This fancy button toggles backnd technologies list only. */}
          <button onClick={toggleBackend} className=" h-16 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 sm:w-48 md:w-64 w-64 h-10 px-4 py-2 inline-flex">
            <div className="flex items-center">
              <span className="ml-1 text-teal-600 text-xl lg:inline p-1 font-bold rounded-lg group-hover:text-yellow-400 ">BACKEND</span>
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              {/* <svg className="size-10 text-gray-500 transition-all duration-200 group-hover:text-yellow-300"
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

          {showFrontEnd && (
            <div> {/*Front end skills */}
              <br />
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 border border-blue-400">TailWind</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">HTML</span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">CSS</span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">JS</span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">REACT</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">REACT Native</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">TypeScript</span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">NEXTjs </span>
              <span className="bg-teal-100 text-teal-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">Flutter</span>
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
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">SQL_Server</span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">GitHub</span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">cPanel</span>
              {/* <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">Pink</span> */}
            </div>
          )}
        </div>

      </div> {/*End overall formatting*/}

      {/* Time line tree */}
      <div className="min-h-screen bg-gray-500 py-6 flex flex-col justify-center sm:py-12">

        <h2 className="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">

          <span className="text-yellow-300 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            A Summarized Timeline
            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>

          </span>
        </h2>

        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

          <div className="relative text-gray-700 antialiased text-sm font-semibold">

            {/* Vertical bar running through middle */}
            <div className="hidden sm:block w-1 bg-yellow-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/*Left section, set by justify-start and sm:pr-8*/}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow">
                      I've started out my journey by first obtaining a BSc. at the University of the Southern Caribbean W.I.,
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow">
                      The twist was I sought to do a couple of projects using CMS and saw how limited they were for certain project aspects,
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 bg-white rounded shadow">
                      After working as a teacher during my 4-year tenure at USC & two years after my graduation, I was seeking new adventures to hone my skills further,
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4 bg-white rounded shadow">
                      Finally, my big break came when I got through with an internship opportunity at RFHL - which is awesome!!!
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-teal-600 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
              </div>
            </div>
            {/* End time line tree */}

          </div>
        </div>

        <h2 className="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">

          <span className="text-yellow-300 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
            ... the journey has just begun.
            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>

          </span>
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </>
  );

}