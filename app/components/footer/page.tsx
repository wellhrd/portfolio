

const Footer = () => {
    return (
        <>
        <div className="flex font-[family-name:var(--font-geist-sans)]">
            <footer>
                    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center m-8">
                    <a
                      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
                      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
                        <p> Copyright &copy; 2025 | Walters Inc. All Rights Reserved.</p>
                    </div>
            </footer>

        </div>
        
        </>
    );
};

export default Footer;