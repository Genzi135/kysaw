/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import ProductData from './data';
import { usePathname } from 'next/navigation';
import Slider from '@/components/Slider';
import { formatCurrency } from '@/utils/format';
import { COLOR } from '@/utils/COLORS';
import { BsClipboard2HeartFill, BsClockFill, BsHouse, BsHouseFill } from 'react-icons/bs';
export default function ProductDetail() {
    const [data, setData] = useState(ProductData);
    const pathName = usePathname();
    useEffect(() => {
        const splitString = pathName.split('/');
        const getId = splitString[splitString.length - 1];
        const getData = ProductData.find((e) => e.id === getId);
        setData(getData);
    }, [])
    if (!data) {
        return (
            <div className='flex flex-1 justify-center items-center'>
                <label className='text-4xl'>Loading...</label>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex justify-center items-center'>
                {data && data.banner ? <img src={data.banner} alt='banner' className='w-full mt-[70px] ' layout='responsive' /> : <Slider />}
            </div>
            <div className='flex justify-center items-center max-w-[1220px]'>
                {data && data.avatar && <div className='flex justify-center items-start w-[500px] bg-gray-200'>
                    <img src={data.avatar} alt='avatar' className='w-full' />
                </div>}
                <div className='flex flex-1 flex-col justify-center items-start gap-2'>
                    {data && data.title && <div className='font-manropeBold text-4xl'>
                        {data.title}
                    </div>}
                    {data && data.price && <div className='font-manropeBold text-4xl' style={{ color: COLOR.backgroundSecondary }}>
                        {formatCurrency(data.price)}
                    </div>}
                    {data && data.description && <div className='text-xl'>
                        {data.description}
                    </div>}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full text-xl bg-blue-50 gap-5 p-5'>
                {data && data.body && data.body.map((e, index) => {
                    return (
                        <div key={index} className='flex justify-between items-center w-[1220px] gap-10'>
                            {e.image && <div className='flex justify-center w-[400px]'>
                                <img src={e.image} alt='data body content' className='w-full' />
                            </div>}
                            {e.title && e.content && <div className='w-[60%] flex justify-start items-start flex-1 flex-col gap-5'>
                                <label className='font-manropeBold text-4xl '>{e.title}</label>
                                {e.content && e.content.type === 'list' && <ul className='list-disc ml-10'>
                                    {
                                        e.content.data.map((i, subIndex) => {
                                            return (
                                                <li key={subIndex}>{i.content}</li>
                                            )
                                        })
                                    }
                                </ul>}
                            </div>}
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center w-full max-w-[1220px]'>
                <div className='w-[49%] flex justify-center items-start flex-col gap-10'>
                    <div className='flex'>
                        <div className='p-3 rounded-full flex justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                            <BsHouseFill size={30} className='text-white' />
                        </div>
                        <div>
                            <label className='font-manropeBold'>
                                Bước 1: Nhận
                            </label>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='p-3 rounded-full flex justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                            <BsClockFill size={30} className='text-white' />
                        </div>
                        <div>
                            b2
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='p-3 rounded-full flex justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                            <BsClipboard2HeartFill size={30} className='text-white' />
                        </div>
                        <div>
                            b3
                        </div>
                    </div>
                </div>
                <div className='w-[49%]'>
                    <img src='' alt='img' className='w-[500px] h-[260px] bg-blue-200' />
                </div>
            </div>
        </div>
    )
}