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
    ];

    const nextClick = () => {
        setIndex((prevIndex) => (prevIndex < listImage.length - 1 ? prevIndex + 1 : 0));
    }

    const prevClick = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : listImage.length - 1));
    }

    useEffect(() => {
        const interval = setInterval(nextClick, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center w-full" style={{ backgroundColor: listImage[index].color }}>
            <div className="max-w-[1220px] w-full h-[fit] relative flex justify-between items-center">
                <button onClick={prevClick} className="w-8 h-16 text-5xl hidden sm:flex justify-center items-center absolute top-[45%] left-0 cursor-pointer rounded-md z-20 hover:bg-black/15 bg-black/5">‹</button>
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.3 }}
                    className="relative z-10"
                >
                    <Image src={listImage[index].path} width={'auto'} height={'auto'} alt="banner" />
                </motion.div>

                <button onClick={nextClick} className="w-8 h-16 text-5xl hidden sm:flex justify-center items-center absolute top-[45%] right-0 cursor-pointer rounded-md z-20 hover:bg-black/15 bg-black/5">›</button>
            </div>
        </div>
    );
}
