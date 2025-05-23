'use client'
import { useState, useEffect } from "react";
import Navbar from "../components/navigation/nav";
import Footer from "../components/footer/page";


export default function Contact() {

    //For when user scrolls the text diappear 
    const [isFaded, setIsFaded] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFaded(true);
        } else {
            setIsFaded(false);
        }
    };

    useEffect(() => {
        //Listen for scroll
        window.addEventListener("scroll", handleScroll);

        //Tidy up listener when component is unmounted 
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (
        <>
            <div className="flex flex-col p-6 sticky top-1">
                <Navbar />
            </div>

            <div className="flex flex-col items-center justify-items-center p-6 sm:p-18 font-[family-name:var(--font-geist-sans)]"> {/* Just for font styling of the entire page */}

                <div className="flex flex-col gap-4 md:flex-row md:space-x-8 px-4 md:px-8">
                    {/* Section 1 */}
                    <div className={`flex flex-col md:w-1/2 xl:gap-10 text-center basis-full md:basis-1/3 justify-center items-center transition-opacity duration-300 ease-in-out ${isFaded
                        ? "opacity-0" : "opacity-100"}`}>
                        <h2 className="text-lg font-bold overline decoration-teal-900">Feel free to contact me</h2>
                        <br />
                        <p>Let's tailor a service package that meets your needs and budget. Tell us a little about your business, and we will get back to you with some ideas and documentation as soon as possible.</p>
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
                            <form action="mailto:mickael.walters@rfhl.com" method="post" className="w-full max-w-xl">

                                <div className="flex flex-col gap-4 px-4 md:gap-6 md:px-6">
                                    <div className="flex flex-col w-full gap-4">
                                        <input className="bg-gray-200 rounded pl-2 w-full border border-gray-400 focus:border-teal-600 focus:outline-none" type="text" placeholder="First Name" />
                                        <input className="bg-gray-200 rounded pl-2 w-full border border-gray-400 focus:border-teal-600 focus:outline-none" type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <br />
                                <div className="flex flex-col w-full gap-4 px-4 md:px-6">
                                    <input className="bg-gray-200 rounded pl-2 w-full border border-gray-400 focus:border-teal-600 focus:outline-none peer" required type="email" placeholder="name@iCloud.com" />
                                    <p className="mt-1 hidden peer-placeholder-shown:hidden peer-invalid:block text-pink-600"> Please enter a valid email</p>
                                </div>
                                <br />
                                <div className="flex flex-col px-4 pb-2 md:px-6 md:pb-3 w-full">
                                    <textarea className="bg-gray-200 rounded pl-2 pt-1 w-full border border-gray-400 focus:border-teal-600 focus:outline-none" rows={5} placeholder="Your message details..."></textarea>
                                </div>
                            </form>

                            <div className="flex justify-center items-center mt-4 w-full">
                                <a href="mailto:mickael.walters@rfhl.com">
                                    <button className="flex block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-yellow-300 px-6 py-2">
                                        Hit me up - I'll call you!
                                    </button>
                                </a>
                            </div>
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