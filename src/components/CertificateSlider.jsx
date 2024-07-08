'use client'
import { useState, useEffect } from 'react';

export default function CertificateSlider({ props }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % props.length);
        }, 3000); // Change the slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [props.length]);

    return (
        <div className="w-[330px] h-[300px] p-5 border-black border-2 rounded-box mt-5 relative">
            <img src={props[index]?.link || ""} alt={`certificate ${props[index]}`} className='absolute' />
            <div className='absolute bottom-10'>
                {props[index].content && props[index].content}
            </div>
        </div>
    );
}
