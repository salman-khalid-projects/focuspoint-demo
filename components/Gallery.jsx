"use client";
import { useState, useEffect } from 'react';
import LazyImage from './LazyImage';
import styles from '@/styles/gallery.module.css'; // Assumes you have a CSS module for custom styles
import Tags from './Tags';

export default function ImageGallery() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to load more images
    async function loadMoreImages(page, limit = 20) {
        setLoading(true);
        try {
            const response = await fetch(`/api/images?page=${page}&limit=${limit}`);
            const data = await response.json();
            setImages((prevImages) => [...prevImages, ...data.images]);
        } catch (error) {
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    }

    // Load images on page change
    useEffect(() => {
        loadMoreImages(page);
    }, [page]);

    // Open the image slider
    const openSlider = (index) => {
        setCurrentImageIndex(index);
        setIsSliderOpen(true);
    };

    // Close the image slider
    const closeSlider = () => {
        setIsSliderOpen(false);
    };

    // Go to the next image in the slider
    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    // Go to the previous image in the slider
    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className="w-full flex justify-center">
            <div className="gap-5 flex flex-wrap items-center justify-center p-5 max-w-[1000px]">
                {images.map((image, index) => (
                    image.type === "file" && (
                        <div key={index} className='cursor-pointer' onClick={() => openSlider(index)}>
                            <LazyImage
                                src={`/${image.path}`}
                                alt={image.name}
                                className="cursor-pointer"
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    )
                ))}
                {loading && <p>Loading more images...</p>}
            </div>

            {isSliderOpen && (
                <div className={styles.sliderOverlay} onClick={closeSlider}>
                    <div className={styles.sliderContent}>
                        <button className={styles.closeButton} onClick={closeSlider}>✕</button>
                        <div className={styles.sliderContainer}>
                            <button
                                className={styles.sliderButton}
                                onClick={(e) => { e.stopPropagation(); goToPreviousImage(); }}
                                disabled={currentImageIndex === 0} // Disable previous button if at the first image
                            >
                                ◀
                            </button>
                            <img
                                src={`/${images[currentImageIndex]?.path}`} // Adding optional chaining to prevent errors
                                alt={images[currentImageIndex]?.name}
                                className={styles.sliderImage}
                                style={{ objectFit: 'cover', width: '90%', height: '90%' }}
                            />
                            <button
                                className={styles.sliderButton}
                                onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                                disabled={currentImageIndex === images.length - 1} // Disable next button if at the last image
                            >
                                ▶
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
