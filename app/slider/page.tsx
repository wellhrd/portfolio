'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './ThreeDCarousel.module.css';
// Projects i did as a slider with links to the websites. I used a 3D carousel effect to make it more visually appealing. 
// The user can click on the "View More" button to open the website in an iframe overlay.
const items = [
  { src: '/sliderPhotos/poui.jpg', alt: 'POUI website', link: 'https://poui.org' },
  { src: '/sliderPhotos/notes.jpg', alt: 'Notes', link: 'https://mickaelwalters.vercel.app/' },
  { src: '/sliderPhotos/cwca.jpg', alt: 'CWCA', link: 'https://mickaelwalters.vercel.app/contact' },
  { src: '/sliderPhotos/ttfares.png', alt: 'TT-Fares', link: 'https://tt-fares.vercel.app'},
  { src: '/sliderPhotos/caoh.JPG', alt: 'CAOH Caribbean', link: 'https://caohcaribbean.org' },
  { src: '/sliderPhotos/rbr.png', alt: 'RBR RamjattansTT', link: 'https://www.rbrramjattans-tt.com'},
  { src: '/sliderPhotos/alwaysBzie.png', alt: 'AlwaysBzie', link: 'https://alwaysbzie.com/' },
  { src: '/sliderPhotos/presidentcollege.png', alt: 'President College', link: 'https://presidentcollegewi.edu.tt/' },
  { src: '/sliderPhotos/md-medical.png', alt: 'MD Medical', link: 'https://mdmedicalconsultancy.com/' },
  { src: '/sliderPhotos/pivotalcleaning.png', alt: 'Pivotal Cleaning', link: 'https://pivotalcleaning.com/' },
  // { src: '/sliderPhotos/placeholder.jpg', alt: 'Placeholder', link: '#' } KissedByBeauty-Coming Soon
];

export default function ThreeDCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  const closeOverlay = () => setActiveIndex(null);

  const renderSlides = (copy: number, isDuplicate = false) =>
    items.map((item, index) => (
      <div
        key={`${copy}-${item.src}`}
        className={styles.slide}
        onClick={() => handleImageClick(index)}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 240px, 300px"
            className={styles.image}
          />

          <div className={styles.overlayButtonWrapper}>
            <button
              className={styles.viewButton}
              tabIndex={isDuplicate ? -1 : undefined}
              onClick={(event) => {
                event.stopPropagation();
                handleImageClick(index);
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.sliderTrack}>
            <div className={styles.slideGroup}>{renderSlides(1)}</div>
            <div className={styles.slideGroup} aria-hidden="true">
              {renderSlides(2, true)}
            </div>
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div className={styles.overlay} onClick={closeOverlay}>
          <iframe
            src={items[activeIndex].link}
            title={items[activeIndex].alt}
            className={styles.iframe}
          />
          <button
            type="button"
            onClick={closeOverlay}
            className={styles.closeButton}
            aria-label="Close project preview"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
