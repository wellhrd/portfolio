import Footer from "../components/footer/page";
import Navbar from "../components/navigation/nav";
import Infocard from "../components/infocard/page";

export default function Skills() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

            <Navbar />

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <div className="text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">

                    I am passionate about using various technologies and tools to enhance my clients projects. <br />
                    See more about me from my social links below and don't be afraid to follow and leave a like 

                    <Infocard />

                </div>

            </main>
        <Footer/>
        </div>

    );

}