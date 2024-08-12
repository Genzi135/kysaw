'use client'
import { imgShared } from "../utils/images";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductSlider() {
    const [index, setIndex] = useState(0);

    const listImage = [
        { path: imgShared.Banner.GenLoveMe, label: 'img1', color: '#47c5e4' },
        { path: imgShared.Banner.GenLoveFit, label: 'img2', color: '#50ba83' },
        { path: imgShared.Banner.GenLoveSkin, label: 'img3', color: '#b52b43' },
        { path: imgShared.Banner.GenLoveKid, label: 'img4', color: '#ffca35' },
        { path: imgShared.Banner.GenCarePre, label: 'img3', color: '#0eacb0' },
        { path: imgShared.Banner.YamuGene, label: 'img4', color: '#a3c93a' },
    ];

    useEffect(() => {
        const interval = setInterval(nextClick, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const nextClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % listImage.length);
    };

    const handleDotClick = (dotIndex) => {
        setIndex(dotIndex);
    };

    return (
        <div className="flex flex-col items-center w-full relative" style={{ backgroundColor: listImage[index].color }}>
            <div className="hidden">{listImage.map((e, index) => { <div key={index}>{e}</div> })}</div>
            <div className="max-w-[1220px] w-full h-auto relative flex justify-between items-center">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.3 }}
                    className="relative z-10"
                >
                    <Image src={listImage[index].path} layout="responsive" width={1220} height={500} alt="banner" />
                </motion.div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {listImage.map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            className={`w-3 h-3 border-[2px] border-gray-400 rounded-full cursor-pointer ${index === dotIndex ? `bg-inherit` : 'bg-gray-400'
                                }`}
                            onClick={() => handleDotClick(dotIndex)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
