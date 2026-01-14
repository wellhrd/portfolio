

const Footer = () => {
    return (
        <>
        <div className="flex font-[family-name:var(--font-geist-sans)]">
            <footer>
                    <div className="flex row-start-3 gap-6 justify-center mt-10">
                    <a
                      className="flex gap-2 relative w-fit block after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:z-10"
                      href="https://linkedIn.com/in/mickaelwalters"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <svg className="h-5 w-5 text-yellow-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg> 
                      LinkedIn
                    </a>
                    <a
                      className="flex gap-2 relative w-fit block after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[4px] after:bg-teal-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:z-10"
                      href="https://x.com/mickaelwalters"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                       <svg className="h-5 w-5 text-yellow-500"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round" >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                      Twitter
                    </a>
                    </div>
                   
                    <div className="flex mt-6 items-center justify-center">
                        <p> Copyright &copy; {new Date().getFullYear()} | Walters Inc. All Rights Reserved.</p>
                    </div>
            </footer>

        </div>
        
        </>
    );
};

export default Footer;