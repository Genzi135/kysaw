/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react';
import ProductData from './data';
import { usePathname } from 'next/navigation';
import Slider from '@/components/Slider';
import { formatCurrency } from '@/utils/format';
import { COLOR } from '@/utils/COLORS';
import { BsClipboard2HeartFill, BsClockFill, BsHeadset, BsHouseFill } from 'react-icons/bs';
import Steps from '@/components/Steps';

export default function ProductDetail() {
    const [data, setData] = useState(null);
    const pathName = usePathname();

    useEffect(() => {
        const splitString = pathName.split('/');
        const getId = splitString[splitString.length - 1];
        const getData = ProductData.find((e) => e.productId === getId);
        setData(getData);
    }, [pathName]);

    if (!data) {
        return (
            <div className='flex flex-1 justify-center items-center mt-[200px] mb-[200px]'>
                <label className='text-4xl flex gap-2'>Loading<span className='loading loading-dots'></span></label>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
                {data.bannerUrl ? (
                    <img src={data.bannerUrl} alt='banner' className='w-full mt-[70px]' layout='responsive' />
                ) : (
                    <Slider />
                )}
            </div>
            <div className='flex justify-center items-center bg-blue-50 w-full'>
                <div className='flex flex-col lg:flex-row justify-center items-start w-[1220px] mt-14'>
                    {data.avatarUrl && (
                        <div className='flex justify-center items-start flex-col'>
                            <img src={data.avatarUrl} alt='avatar' className='w-full max-w-[420px] rounded-tl-[120px] rounded-br-[80px] shadow-xl mb-6' />
                            <label className='font-extrabold pb-10 italic cursor-pointer' style={{ color: COLOR.backgroundPrimary }}>Tham khảo kết quả mẫu</label>
                        </div>
                    )}
                    <div className='flex flex-1 flex-col justify-center items-start gap-2 pl-20 pr-5 '>
                        {data.productName && (
                            <div className='font-manropeExtrabold text-3xl mt-5' >
                                {data.productName}
                            </div>
                        )}
                        {data.price && (
                            <div className='font-manropeBold text-3xl' style={{ color: data.color ? data.color : '' }}>
                                {formatCurrency(data.price)}
                            </div>
                        )}

                        <div className='flex flex-col'>
                            <label className='text-xl font-manropeBold'>Lợi ích dịch vụ</label>
                            <ul className='list-disc'>
                                {data.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-xl font-manropeBold'>Các chỉ số xét nghiệm</label>
                            <div className='grid grid-cols-2 w-full'>
                                {data.indicators.map((indicator, index) => (
                                    <div className='flex gap-2 mt-2 pr-4' key={index}><BsHouseFill size={22} />{indicator}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <button className='btn w-[260px] text-lg text-white mt-5 mb-14 ' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                                <BsHeadset size={20} />
                                Tư vấn ngay</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full text-lg gap-5 p-5 mb-5'>
                <div className='relative max-w-[1220px] w-full flex justify-center items-center border-b-2 mt-10 mb-10'>
                    <div className='font-manropeBold text-2xl rounded-badge border-2 p-2 pl-6 pr-6 absolute w-fit text-nowrap bg-white'>Giới thiệu chung</div>
                </div>
                {data.introductions && (
                    <div className='flex flex-col justify-center items-center md:flex-row max-w-[1220px]'>
                        <div className='w-full md:w-[50%]'>
                            <img src={data.introductions.image} alt='content image' className='w-[400px] mx-auto' />
                        </div>
                        <div className='w-full md:w-[50%] p-3 flex flex-col gap-3 text-lg'>
                            {data.introductions.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )}
                <div className='w-full border-[1px] max-w-[1220px]'>

                </div>
            </div>

            <Steps />
        </div>
    );
}
