/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react';
import ProductData from './data';
import { usePathname } from 'next/navigation';
import { COLOR } from '@/utils/COLORS';
import { BsClipboard2HeartFill, BsClockFill, BsHeadset, BsHouseFill } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { imgShared } from '@/utils/images';

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
            <div className='flex justify-center items-center'>
                {data.bannerUrl ? (
                    <img src={data.bannerUrl} alt='banner' className='w-full mt-[70px]' layout='responsive' />
                ) : (
                    <Image src={imgShared.Banner.HomePageBanner} alt='banner' className='w-full mt-[70px]' layout='responsive' style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},${COLOR.backgroundSecondary})` }} />
                )}
            </div>
            <div className='flex justify-center items-center bg-blue-50 w-full'>
                <div className='flex flex-col lg:flex-row justify-center items-center md:items-start w-[1220px] mt-14'>
                    {data.avatarUrl && (
                        <div className='flex justify-center items-start flex-col'>
                            <div className=' max-w-[420px] rounded-tl-[120px] rounded-br-[80px] shadow-xl mb-6 bg-white p-10'>
                                <Image src={data.avatarUrl} alt='avatar' width={'100%'} height={'100%'} />
                            </div>
                            <label className='font-extrabold pb-10 italic cursor-pointer' style={{ color: COLOR.backgroundPrimary }}>Tham khảo kết quả mẫu</label>
                        </div>
                    )}
                    <div className='flex flex-1 flex-col justify-center items-start gap-2 pl-10 md:pl-20 pr-5 '>
                        {data.productName && (
                            <div className='font-manropeExtrabold text-3xl mt-5' >
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
                <div className='w-full border-[1px] max-w-[1220px]'>

                </div>

            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-[1220px]'>
                <div className='w-full lg:w-[49%] flex justify-center items-start flex-col'>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            <div className='flex gap-5'>
                                <div className='p-3 rounded-full flex justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                                    <BsHouseFill size={30} className='text-white' />
                                </div>
                                <div>
                                    <label className='font-manropeBold text-xl'>
                                        Bước 1: Nhận kit tại nhà
                                    </label>
                                    <div>
                                        KYSAW sẽ gửi bộ kit lấy mẫu về địa chỉ của bạn
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content pl-24 text-lg">
                            <p>Bộ lấy mẫu bao gồm:</p>
                            <ul>
                                <li>1.Que lấy mẫu</li>
                                <li>2.Sổ tay hướng dẫn</li>
                                <li>3.Giấy đồng thuận</li>
                                <li>4.Tem dán bảo mật</li>
                                <li>5.Hướng dẫn lấy gen</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg font-medium">
                            <div className='flex gap-5'>
                                <div className='p-3 rounded-full flex justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                                    <BsClockFill size={30} className='text-white' />
                                </div>
                                <div>
                                    <label className='font-manropeBold text-xl'>
                                        Bước 2: Lấy mẫu gen tại nhà
                                    </label>
                                    <div>
                                        Lấy mẫu gen và gửi về KYSAW
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content pl-24 text-lg">
                            <p>Quy trình lấy mẫu lại nhà:</p>
                            <ul>
                                <li>1.Súc miệng 5s với nước sạch</li>
                                <li>2.Chà đầu que gòn lên niêm mạc má bên trong miệng (30s/bên)</li>
                                <li>3.Để que khô tự nhiên 2-3 phút, bảo quản trong túi giấy, túi zip</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-lg font-medium">
                            <div className='flex gap-5'>
                                <div className='p-3 rounded-full flex justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                                    <BsClipboard2HeartFill size={30} className='text-white' />
                                </div>
                                <div>
                                    <label className='font-manropeBold text-xl'>
                                        Bước 3: Nhận kết quả
                                    </label>
                                    <div>
                                        KYSAW sẽ gửi kết quả vào địa chỉ email của bạn
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse-content pl-24 text-lg">
                            <p>Nhận kết quả qua mail:</p>
                            <ul>
                                <li>1.Gen của bạn sẽ được giải mã và phân tích</li>
                                <li>2.Kết quả nhanh chóng, chính xác dựa trên chứng cứ khoa học và công nghệ</li>
                                <li>3.Cam kết bảo mật thông tin và quyền riêng tư</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[49%] flex justify-center items-center p-2'>
                    <img src='https://res.cloudinary.com/diribdgsz/image/upload/v1719924082/kysaw/benefit/genesolutions-san-pham-genloveme-img-03-1.png_ukayz0.webp' alt='img' className='w-[500px] h-[500px] ' />
                </div>
            </div>
        </div>
    );
}
