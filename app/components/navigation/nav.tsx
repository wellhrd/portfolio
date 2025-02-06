'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex-1 w-full h-20 sticky top-1 bg-white-900 rounded">
                <div className="container mx-auto px-4 h-full flex-1">
                    <div className="flex justify-between items-center h-full">
                        <Link href="/">
                            <Image
                                className="dark:invert"
                                src="/logo1.png" //Logo
                                alt="Walters Inc. Logo"
                                width={300}
                                height={100}
                                priority
                            />
                        </Link>

                        <div className="md:hidden items-center">
                            <button onClick={toggleMenu} className="text-teal-600 focus:outline-none flex">
                                <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>

                        <ul className={`md:flex-row md:flex gap-x-8 ${isOpen ? 'flex absolute top-full left-0 flex-col bg-teal-900' : 'hidden'}`}>
                            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                <Link href="/about">
                                    <p>About Me</p>
                                </Link>
                            </li>
                            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                <Link href="/skills">
                                    <p>Resume</p>
                                </Link>
                            </li>
                            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                            <li>
                                <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;