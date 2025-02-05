import Link from "next/link";
import Navbar from "../components/navigation/nav";
import Footer from "../components/footer/page";


export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-between gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Navbar />

            <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <div className="flex flex-row">

                    <div className="basis-1/3">
                        <h2 className="flex justify-center text-lg/10 font-bold overline decoration-teal-900"> Feel free to contact me</h2> <br /> <br />
                        <p className="flex "> Let's tailor a service package that meet your needs and budget. Tell us a little about your business, and we will get back to you with some ideas and documentation as soon as possible. </p>
                        <br />
                        <div className="flex">
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

                    <div className="basis-2/3 ">

                        <div className="max-w-2xl mx-4  md:mx-auto lg:mx-auto xl:mx-auto mt-2 bg-white rounded-lg text-gray-900 ">

                            
                        <div className="mx-auto max-w text-center">
                            <h2 className="text-lg/10 text-grey-900 font-bold"> Contact form</h2>
                        </div>


                        <form action="mailto:mickael.walters@rfhl.com"  method="post">
                        <div className="flex gap-10 ">
                            <div className="flex">
                                <input className="bg-gray-200 rounded" type="text" placeholder="&nbsp;&nbsp;First Name" />
                            </div>

                            <div className="">
                                <input className="bg-gray-200 rounded" type="text" placeholder="&nbsp;&nbsp;Last Name" />
                            </div>
                        </div>
                        <br/>
                            <div className="">
                                <input className="bg-gray-200 rounded" type="text" placeholder="&nbsp;&nbsp;name@example.com" />
                            </div>
                        <br/>
                            <div>
                                <textarea className=" bg-gray-200 rounded" rows={5} cols={50} placeholder="&nbsp;&nbsp;Detail your message..." ></textarea>
                            </div>
                        </form>
                        </div>
                       
                        <br />

                        <div>
                            <a href="mailto:mickael.walters@rfhl.com">
                                <button
                                    className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg
                        font-semibold text-yellow-300 px-6 py-2"
                                >
                                    Hit me 
                                    🤜✨🤛 up, I'll call you!
                                </button>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <Footer/>
        </div>

    );

}