'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ThreeDCarousel.module.css';

const items = [
  { src: '/sliderPhotos/poui.jpg', alt: 'POUI website', link: 'https://poui.org' },
  { src: '/sliderPhotos/notes.jpg', alt: 'Notes', link: 'https://mickaelwalters.vercel.app/' },
  { src: '/sliderPhotos/cwca.jpg', alt: 'CWCA', link: 'https://mickaelwalters.vercel.app/contact' },
  { src: '/sliderPhotos/caoh.JPG', alt: 'CAOH Caribbean', link: 'https://caohcaribbean.org' }
];

export default function ThreeDCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const closeOverlay = () => setActiveIndex(null);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div className={styles.sliderTrack}>
          {items.concat(items).map((item, index) => {
            const realIndex = index % items.length;
            return (
              <div
                key={index}
                className={styles.slide}
                onClick={() => handleImageClick(realIndex)}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={styles.image}
                  />

                  <div className={styles.overlayButtonWrapper}>
                    <button className={styles.viewButton} onClick={(e) => {
                      e.stopPropagation(); // Prevent parent onClick
                      handleImageClick(realIndex);
                    }}>
                      View More
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>

      {activeIndex !== null && (
        <div className={styles.overlay} onClick={closeOverlay}>
          <iframe
            src={items[activeIndex].link}
            title={items[activeIndex].alt}
            className={styles.iframe}
          />
          <button onClick={closeOverlay} className={styles.closeButton}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
