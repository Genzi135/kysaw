import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import image1 from '../../assets/Slider/Family 1 copy.png';
import image2 from '../../assets/Slider/GenLove Fit copy.png';
import image3 from '../../assets/Slider/Skin final copy.png';
import image4 from '../../assets/Slider/Kids copy.png';

const listImage = [
    { path: image1, label: 'img1', color: '#46c5e4' },
    { path: image2, label: 'img2', color: '#4ebb85' },
    { path: image3, label: 'img3', color: '#ed5c90' },
    { path: image4, label: 'img4', color: '#fcc939' },
];

const Slider = () => {
    const [indexImage, setIndexImage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const wrapperRef = useRef(null);
    const autoChangeRef = useRef(null);

    const resetAutoChange = () => {
        if (autoChangeRef.current) {
            clearInterval(autoChangeRef.current);
        }
        autoChangeRef.current = setInterval(() => {
            handleNextClick();
        }, 5000);
    };

    useEffect(() => {
        resetAutoChange();
        return () => clearInterval(autoChangeRef.current);
    }, []);

    useEffect(() => {
        resetAutoChange();
    }, [indexImage]);

    const handlePrevClick = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        if (indexImage === 0) {
            wrapperRef.current.style.transition = 'transform 0.5s ease';
            wrapperRef.current.style.transform = `translateX(${100}%)`;
            setTimeout(() => {
                wrapperRef.current.style.transition = 'none';
                wrapperRef.current.style.transform = `translateX(-${listImage.length * 100}%)`;
                setIndexImage(listImage.length - 1);
            }, 500); // Wait for the transition to end
        } else {
            setIndexImage((prevIndex) => prevIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setIndexImage((prevIndex) => prevIndex + 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (indexImage >= listImage.length) {
            setIndexImage(0);
            wrapperRef.current.style.transition = 'none';
            wrapperRef.current.style.transform = `translateX(0%)`;
        } else if (indexImage < 0) {
            setIndexImage(listImage.length - 1);
            wrapperRef.current.style.transition = 'none';
            wrapperRef.current.style.transform = `translateX(-${(listImage.length - 1) * 100}%)`;
        }
    };

    useEffect(() => {
        if (indexImage >= 0 && indexImage < listImage.length) {
            wrapperRef.current.style.transition = 'transform 0.5s ease';
            wrapperRef.current.style.transform = `translateX(-${indexImage * 100}%)`;
        }
    }, [indexImage]);

    return (
        <div className='w-full flex justify-center items-center transition duration-500 ease-linear'
            style={{ backgroundColor: listImage[indexImage % listImage.length].color }}>
            <div className="w-full justify-center items-center mt-8 max-w-[1220px]">
                <div
                    className="slider-container"
                >
                    <button className="arrow-button left" onClick={handlePrevClick}>
                        <BsChevronLeft />
                    </button>
                    <div
                        className="slider-wrapper mt-10 flex"
                        style={{
                            transform: `translateX(-${indexImage * 100}%)`,
                            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
                        }}
                        onTransitionEnd={handleTransitionEnd}
                        ref={wrapperRef}
                    >
                        {listImage.concat(listImage).map((image, index) => (
                            <Image
                                key={index}
                                src={image.path}
                                alt={image.label}
                                className="slider-image"
                                layout="responsive"
                                loading="lazy"
                            />
                        ))}
                    </div>
                    <button className="arrow-button right" onClick={handleNextClick}>
                        <BsChevronRight />
                    </button>
                    <style jsx>{`
                    .slider-container {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        overflow: hidden;
                        font-size: 20px;
                        min-width: 100%;
                        transition: background-color 0.5s ease;
                    }
                    .slider-wrapper {
                        display: flex;
                    }
                    .slider-image {
                        min-width: 100%;
                    }
                    .arrow-button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        background-color: rgba(0, 0, 0, 0.1);
                        border: none;
                        color: white;
                        padding: 10px;
                        cursor: pointer;
                        z-index: 10;
                        border-radius: 5px;
                    }
                    .arrow-button.left {
                        left: 10px;
                    }
                    .arrow-button.right {
                        right: 10px;
                    }
                    .arrow-button:hover {
                        background-color: rgba(0, 0, 0, 0.4);
                    }
                `}</style>
                </div>
            </div>
        </div>
    );
};

export default Slider;
