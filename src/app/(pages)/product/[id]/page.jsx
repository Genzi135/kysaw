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
                <label className='text-4xl'>Loading...</label>
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
                <div className='w-full lg:w-[49%] flex justify-center items-center'>
                    <img src='https://res.cloudinary.com/diribdgsz/image/upload/v1719924082/kysaw/benefit/genesolutions-san-pham-genloveme-img-03-1.png_ukayz0.webp' alt='img' className='w-[500px] h-[500px] ' />
                </div>
            </div>
        </div>
    );
}
