'use client'
import { COLOR } from '@/utils/COLORS'
import productData from '../product/[id]/data'
import { useEffect, useState } from 'react';

export default function Test() {
    const [indexImage, setIndexImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndexImage((prevIndex) => (prevIndex + 1) % productData.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="mt-24 flex justify-center items-center mb-20 gap-20">
            <div className='flex flex-col gap-2'>
                {productData && productData.map((e, index) => {
                    return (
                        <div key={index} className={`flex justify-center items-center gap-5 flex-row ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                            <div className="product-card-hexagon h-[125px] w-[160px] flex justify-center items-center p-2 pl-2 pr-2 animate-bounceSlow hover:animate-none" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},${COLOR.backgroundSecondary})` }}>
                                <div className="product-card-hexagon h-[auto] w-[auto] flex justify-center items-center pl-4 pr-4 bg-white" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                                    <img src={e.avatarUrl} alt='product' width={'auto'} height={'auto'} onClick={() => setIndexImage(index)} />
                                </div>
                            </div>
                            <div>
                                description
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='h-full bg-gray-100 p-10'>
                {productData[indexImage].productName}
                <img src={productData[indexImage].avatarUrl} alt='product' width={'200px'} height={'200px'} />
            </div>



        </div>
    )
}