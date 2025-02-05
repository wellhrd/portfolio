import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navigation/nav";
import Footer from "../components/footer/page";

export default function Skills() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Navbar />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <p className="text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">

          Skillls...Resume

        </p>
      </main>
    <Footer/>
    </div>
  
  );

}

