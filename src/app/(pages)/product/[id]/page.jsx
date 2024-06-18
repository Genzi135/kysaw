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
            <div className='flex flex-col lg:flex-row justify-center items-center max-w-[1220px]'>
                {data.avatarUrl && (
                    <div className='flex justify-center items-start w-[500px] bg-gray-200'>
                        <img src={data.avatarUrl} alt='avatar' className='w-full' />
                    </div>
                )}
                <div className='flex flex-1 flex-col justify-center items-start gap-2 pl-5 pr-5 '>
                    {data.productName && (
                        <div className='font-manropeBold text-4xl'>
                            {data.productName}
                        </div>
                    )}
                    {data.price && (
                        <div className='font-manropeBold text-4xl' style={{ color: COLOR.backgroundSecondary }}>
                            {formatCurrency(data.price)}
                        </div>
                    )}
                    {data.description && (
                        <div className='text-xl'>
                            {data.description}
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full text-lg bg-blue-50 gap-5 p-5'>
                {data.details && data.details.map((e, index) => {
                    return (
                        <div key={index} className='flex flex-col lg:flex-row justify-between items-center lg:w-[1220px] gap-5'>
                            {e.sectionImage && (
                                <div className='flex justify-center w-[full] lg:w-[400px]'>
                                    <img src={e.sectionImage} alt='data body content' className='w-full' />
                                </div>
                            )}
                            {e.sectionTitle && e.sectionContent && (
                                <div className='lg:w-[60%] flex justify-center lg:justify-start items-start flex-1 flex-col gap-5 w-full'>
                                    <label className='font-manropeBold text-3xl flex justify-center lg:justify-start items-center'>{e.sectionTitle}</label>
                                    {e.sectionContent.type === 'list' && (
                                        <ul className='list-disc ml-5'>
                                            {e.sectionContent.items.map((i, subIndex) => (
                                                <li key={subIndex} className='text-wrap'>{i.text}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
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
                    <img src='' alt='img' className='w-[500px] h-[260px] bg-blue-200' />
                </div>
            </div>
        </div>
    );
}
