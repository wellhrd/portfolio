'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode, setTheme } from "../redux/themeSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);

    // Check local storage for theme preference on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            dispatch(setTheme(savedTheme as 'dark' | 'light')); // Set theme based on local storage
        } else {
            // Detect system preference on first load
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            dispatch(setTheme(prefersDark ? 'dark' : 'light'));
        }
    }, [dispatch]);

    useEffect(() => {
        if (isDarkMode) {
            //document.body.classList.add('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); //Save preferences to local storage - this makes it stateful proof
        } else {
            //document.body.classList.remove('dark');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); //Save preferances to local storage - this makes it stateful proof
        }
    }, [isDarkMode]);

    const handleThemeToggle = () => {
        dispatch(toggleDarkMode());
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // This code changs the state color of the toggle button when pressed
    const [isYellow, setYellow] = useState(false);

    const toggleColor = () => {
        setYellow(!isYellow);
        toggleMenu(); //To call existing toggleMenu function
    }

    return (
        <>
            <div className="flex-1 w-full h-20 sticky top-1 bg-white-800 dark:bg-gray-800 rounded">
                <div className="container mx-auto px-4 h-full flex-1">
                    <div className="flex justify-between items-center h-full">
                        <Link href="/">
                            <Image
                                className="dark:invert"
                                src="/mylogo.svg"
                                alt="Walters Inc logo"
                                width={300}
                                height={110}
                                priority
                            />
                        </Link>
                        {/* Hamburger menu */}
                        <div className="md:hidden flex items-center relative z-50">
                            <button onClick={() => { toggleMenu(), toggleColor() }} className="text-teal-600 focus:outline-none flex">
                                <svg className="w-10 h-15" fill="none" stroke={isYellow ? 'yellow' : "currentColor"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className={isYellow ? 'text-yellow-300' : 'text-current'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>

                        <ul className={`md:flex-row md:flex gap-x-8 ${isOpen ? 'flex absolute top-full right-0 flex-wrap w-screen justify-center bg-transparent z-50' : 'hidden md:flex'}`}>
                            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                <Link href="/about">
                                    <p>About Me</p>
                                </Link>
                            </li>
                            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                <Link href="/skills">
                                    <p>Skills</p>
                                </Link>
                            </li>
                            <li className="relative w-fit block after:block after:content-[''] after:absolute after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                            {/* This toggles dark and light mode */}
                            <li>
                                <button onClick={() => { handleThemeToggle() }}>
                                    {isDarkMode ? (
                                        <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    ) : (
                                        <svg className="h-5 w-5 text-teal-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="4" />  <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" /></svg>
                                    )}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

