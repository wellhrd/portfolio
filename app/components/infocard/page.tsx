import Image from 'next/image';
import Socials from '../socials/page';
import Link from 'next/link';


const Infocard = () => {
    return (

        <>
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-8 bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <Image className="object-cover object-top w-full" src="/waterfall.jpg" width={500} height={100} alt='walterfall' />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <Image className="object-cover object-center h-90" src="/me.jpeg" width={120} height={90} alt='its me' />
                </div>
                <div className="text-center mt-5">
                    <h2 className="font-semibold">Mickael Walters</h2>
                    <p className="text-gray-400">IT Network Tech | Web Designer</p>
                </div>

                <Socials />

                <div className="max-w-2xl mx-4 md:mx-auto lg:mx-auto xl:mx-auto mt-2 bg-white rounded-lg text-gray-900">
                    <div className='flex gap-4 items-center justify-center'>
                        <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className='text-lg text-gray-900 italic'> Trinidad & Tobago, W.I </span>
                    </div>

                    <div className='flex gap-4 items-center justify-center'>
                        <svg className="h-5 w-5 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <a href = "mailto:mickael.walters@rfhl.com" > mickael.walters@rfhl.com </a>
                    </div>

                    <div className='flex gap-4 items-center justify-center'>
                        <svg className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className='text-lg text-gray-900 italic'> 1-868 625-3617 </span>
                    </div>

                    <div className="p-4 border-t mx-8 mt-2">
                        <Link href="https://www.dropbox.com/scl/fi/5qwm4ppqvjojxwhe9omci/M.-Walters_RESUME.pdf?rlkey=9omlrnxbkd8w4m0o11ndfadd1&e=1&dl=0" target='_blank'>
                            <button className="w-full w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-yellow-300 px-6 py-2">
                                RESUME
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Infocard;