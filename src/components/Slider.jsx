'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import image1 from '../../assets/Slider/Family 1 copy.jpg';
import image2 from '../../assets/Slider/GenLove Fit copy.jpg';
import image3 from '../../assets/Slider/Skin copy.jpg';
import image4 from '../../assets/Slider/Kids copy.jpg';

const listImage = [
    { path: image1, label: 'img1' },
    { path: image2, label: 'img2' },
    { path: image3, label: 'img3' },
    { path: image4, label: 'img4' },
];

const Slider = () => {
    const [indexImage, setIndexImage] = useState(0);

    useEffect(() => {
        const autoChange = setInterval(() => {
            setIndexImage((prevIndex) => (prevIndex + 1) % listImage.length);
        }, 10000);

        return () => clearInterval(autoChange);
    }, []);

    const handlePrevClick = () => {
        setIndexImage((prevIndex) => (prevIndex === 0 ? listImage.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setIndexImage((prevIndex) => (prevIndex + 1) % listImage.length);
    };

    return (
        <div className="slider-container">
            <button className="arrow-button left" onClick={handlePrevClick}><BsChevronLeft /></button>
            <div className="slider-wrapper mt-10 flex" style={{ transform: `translateX(-${indexImage * 100}%)` }}>
                {listImage.map((image, index) => (
                    <Image key={index} src={image.path} alt={image.label} className="slider-image " layout="responsive" loading='lazy' />
                ))}
            </div>
            <button className="arrow-button right" onClick={handleNextClick}><BsChevronRight /></button>
            <style jsx>{`
                .slider-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    overflow: hidden;
                    font-size: 20px;
                    min-width:100%;
                }
                .slider-wrapper {
                    display: flex;
                    transition: transform 0.5s ease;
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
    );
};

export default Slider;
