"use client"
import { useState } from 'react';
import Image from 'next/image';

interface CarouselItem {
    src: string;
    alt: string;
}

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items: CarouselItem[] = [
        { src: '/sliderPhotos/poui.jpg', alt: 'POUI website' },
        { src: '/sliderPhotos/notes.jpg', alt: 'Notes' },
        { src: '/sliderPhotos/cwca.jpg', alt: 'CWCA' },
    ];

    const showItem = (index: number) => {
        setCurrentIndex(index);
    };

    const prevItem = () => {
        setCurrentIndex((currentIndex > 0) ? currentIndex - 1 : items.length - 1);
    };

    const nextItem = () => {
        setCurrentIndex((currentIndex < items.length - 1) ? currentIndex + 1 : 0);
    };

    return (
        <div id="default-carousel" className="relative mb-4 mt-4 ml-4" data-carousel="static">
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {items.map((item, index) => (
                    <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`} data-carousel-item>
                        <Image src={item.src} className="flex block w-full h-full object-fit-fill relative top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt={item.alt} />
                    </div>
                ))}
            </div>
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                {items.map((_, index) => (
                    <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-300' : 'bg-teal-600'}`} aria-current={index === currentIndex} aria-label={`Slide ${index + 1}`} onClick={() => showItem(index)}></button>
                ))}
            </div>
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={prevItem}>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-300 dark:bg-[#e0be53] group-hover:bg-teal-600 dark:group-hover:bg-teal-600 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="hidden">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" onClick={nextItem}>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-yellow-300 dark:bg-[#e0be53] group-hover:bg-teal-600 dark:group-hover:bg-teal-600 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="hidden">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Slider;