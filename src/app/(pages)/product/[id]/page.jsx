/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import ProductData from './data';
import { usePathname } from 'next/navigation';
import { COLOR } from '../../../../utils/COLORS';
import { BsClipboard2HeartFill, BsClockFill, BsHeadset, BsHouseFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { imgShared } from '../../../../utils/images';
import KitTest from '../../../../components/KitTest'

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
                <label className='text-4xl'>Loading...</label>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center scroll-smooth">
            <div className='flex justify-center items-center w-full' style={{ backgroundColor: data.color }}>
                <div className='w-full max-w-[1220px]'>
                    {data.bannerUrl ? (
                        <Image src={data.bannerUrl} alt='banner' className='w-full mt-[70px] max-h-[500px]' layout='responsive' />
                    ) : (
                        <Image src={imgShared.Banner.HomePageBanner} alt='banner' className='w-full mt-[70px]' layout='responsive' style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},${COLOR.backgroundSecondary})` }} />
                    )}
                </div>
            </div>
            <div className='flex justify-center items-center bg-blue-50 w-full'>
                <div className='flex flex-col lg:flex-row justify-center items-center md:items-start w-[1220px] mt-14'>
                    {data.avatarUrl && (
                        <div className='flex justify-center items-start flex-col'>
                            <div className=' max-w-[420px] rounded-tl-[120px] rounded-br-[80px] shadow-xl mb-6 bg-white p-10'>
                                <Image src={data.avatarUrl} alt='avatar' width={'100%'} height={'100%'} />
                            </div>
                            <label className='font-manropeBold pb-10 italic cursor-pointer' style={{ color: COLOR.backgroundPrimary }}>Tham khảo kết quả mẫu</label>
                        </div>
                    )}
                    <div className='flex flex-1 flex-col justify-center items-start gap-2 pl-10 md:pl-20 pr-5 '>
                        {data.productName && (
                            <div className='font-manropeBold text-3xl mt-5' >
                                {data.productName}
                            </div>
                        )}
                        {data.price && (
                            <div className='font-manropeBold text-3xl' style={{ color: data.color ? data.color : '' }}>
                                Giá: {data.price}
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
                            <div className='md:grid grid-cols-2 w-full flex flex-wrap'>
                                {data.indicators.map((indicator, index) => (
                                    <div className='flex items-center gap-2 mt-2 pr-4' key={index}><div className='max-w-2 max-h-2 min-w-2 min-h-2 rounded-full bg-black' />{indicator}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Link href={'#tuvan'}><button className='btn w-[260px] text-lg text-white mt-5 mb-14 ' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                                <BsHeadset size={20} />
                                Tư vấn ngay</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full text-lg gap-5 p-5 mb-5'>
                <div className='relative max-w-[1220px] w-full flex justify-center items-center border-b-2 mt-10 mb-10'>
                    <div className='font-manropeBold text-2xl rounded-badge border-2 p-2 pl-6 pr-6 absolute w-fit text-nowrap bg-white'>Giới thiệu chung</div>
                </div>
                {data.introductions && (
                    <div className='flex flex-col justify-center items-center  max-w-[1220px]'>
                        <div className='w-full md:w-[850px] flex justify-center items-center'>
                            <Image src={data.introductions.image} alt='content image' width={'auto'} height={'auto'} className='mx-auto' loading='lazy' />
                        </div>
                        <div className='w-full md:w-[1000px] flex flex-col gap-3 text-lg'>
                            {data.introductions.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                )}
                <div className='w-full border-[1px] max-w-[1220px] mt-10'>
                </div>

            </div>
            <KitTest data={data} />
        </div>
    );
}
