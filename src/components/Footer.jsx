'use client';
import Image from 'next/image';
import { COLOR } from '../utils/COLORS';
import { BiLogoGmail, BiSolidMap, BiSolidPhoneCall } from 'react-icons/bi';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { imgShared } from '../utils/images';
import { SendEmail } from '../app/services/email.service';

export default function Footer() {
    const [inputPhone, setInputPhone] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputProblem, setInputProblem] = useState('');

    const onInputPhoneChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {  // Only allow digits
            setInputPhone(value);
        }
    };

    const onInputNameChange = (e) => {
        const value = e.target.value;
        setInputName(value)
    }

    const onProblemChange = (e) => {
        const value = e.target.value;
        setInputProblem(value)
    }

    const onSubmitClick = () => {
        if (inputPhone && inputName) {
            if (inputPhone.length < 10) {
                toast.error("Số điện thoại ít hơn 10 chữ số")
            } else if (inputPhone.length > 10) {
                toast.error("Số điện thoại nhiều hơn 10 chữ số")
            } else {
                SendEmail(inputName, inputPhone, inputProblem);
                toast.success("Đã gửi thành công");
                setInputPhone('');
                setInputName('');
                setInputProblem('');
            }
        } else {
            toast.error("Vui lòng nhập tên và số điện thoại")
        }
    }

    const products = [
        {
            title: 'YAMUGENE ',
            link: '/product/YAMUGENE'
        }, {
            title: 'GenCare Premium',
            link: '/product/genepremium',
        }, {
            title: 'GenLove Me',
            link: '/product/geneloveMe'
        }, {
            title: 'GenLove Skin',
            link: '/product/geneloveSkin'
        }, {
            title: 'GenLove Fit',
            link: '/product/genelovefit'
        }, {
            title: 'GenLove Kid',
            link: '/product/genelovekid'
        },
    ]

    return (
        <div id='tuvan' className="flex flex-col">
            <div className='flex justify-center items-center bg-blue-50 pb-10'>
                <div className='flex flex-col md:flex-row justify-center items-center p-5 max-w-[1220px]'>
                    <div>
                        <Image src={imgShared.ContactEmail} alt='contactEmail' className='w-[400px]' />
                    </div>
                    <div className='form flex flex-col gap-2 text-sm md:text-xl'>
                        <label className='font-manropeBold text-2xl flex justify-center items-center'>Dịch vụ khách hàng</label>
                        <div className='flex justify-center items-center gap-1 flex-wrap'>
                            <label>
                                Vui lòng để lại số điện thoại của bạn,
                            </label>
                            <label>
                                KYSAW sẽ liên hệ với bạn trong vòng 24h
                            </label>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 w-full grow'>
                            <div className='flex flex-col sm:flex-row gap-2 items-center w-full'>
                                <label className='w-full flex justify-center md:justify-start items-center font-manropeBold'>
                                    Chọn dịch vụ bạn cần tư vấn
                                </label>
                                <select className='select text-xl w-full bg-white'>
                                    {products.map((e, index) => {
                                        return (
                                            <option className='option text-sm md:text-lg font-manropeBold bg-white' key={index}>{e.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <input
                                type='text'
                                value={inputName}
                                onChange={onInputNameChange}
                                placeholder='Tên'
                                className='p-2 border border-gray-300 bg-white rounded-md input w-full'
                            />
                            <input
                                type='text'
                                value={inputPhone}
                                onChange={onInputPhoneChange}
                                placeholder='Số điện thoại...'
                                className='p-2 border border-gray-300 bg-white rounded-md w-full input'
                            />
                            <textarea
                                value={inputProblem}
                                onChange={onProblemChange}
                                className='p-2 border border-gray-300 bg-white rounded-md w-full input h-24' placeholder='Câu hỏi...'
                            />
                            <button onClick={() => onSubmitClick()} className='btn text-white w-full font-manropeBold tex-xl' style={{ backgroundColor: COLOR.backgroundPrimary }}>Gửi</button>
                        </div>
                        {/* <label className='flex justify-center items-center'>Hotline: (+84) 345 972 986</label> */}
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center bg-white'>
                <div className='flex justify-around items-start flex-col md:flex-row ml-5 mr-5 mb-5 w-[1220px]'>
                    <div className='flex flex-col justify-center items-start mt-5'>
                        <label className='text-xl font-manropeBold mb-1'>Dịch vụ</label>
                        <Link href={'/product/YAMUGENE'} className='hover:text-sky-600'>YAMUGENE</Link>
                        <Link href={'/product/gencarepremium'} className='hover:text-sky-500'>GenCare Premium</Link>
                        <Link href={'/product/genloveme'} className='hover:text-sky-500'>GenLove Me</Link>
                        <Link href={'/product/genloveskin'} className='hover:text-sky-500'>GenLove Skin</Link>
                        <Link href={'/product/genlovefit'} className='hover:text-sky-500'>GenLove Fit</Link>
                        <Link href={'/product/genlovekid'} className='hover:text-sky-500'>GenLove Kid</Link>
                    </div>
                    <div className='flex flex-col justify-center items-start mt-5'>
                        <label className='text-xl font-manropeBold mb-1'>Công ty</label>
                        <Link href={'/about'} className='hover:text-sky-500'>Về chúng tôi</Link>
                        <Link href={'/about#doitac'} className='hover:text-sky-500'>Đối tác của chúng tôi</Link>
                        <Link href={'/consultants'} className='hover:text-sky-500'>Tư vấn viên</Link>
                        <Link href={'/recruitment'} className='hover:text-sky-500'>Tuyển dụng</Link>
                    </div>
                    <div className='flex flex-col justify-center items-start mt-5'>
                        <label className='text-xl font-manropeBold mb-1'>Liên hệ</label>
                        {/* <Link href={'#tuvan'} className='hover:text-sky-500'>Tư vấn (Miễn phí)</Link> */}
                        <div className='flex justify-start items-center gap-2 mt-1'>
                            Công ty TNHH KYSAW
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-1'>
                            MST: 0318502266
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-1'>
                            <BiSolidPhoneCall size={25} className='rounded-full p-1 border-[2px] border-black text-black' />
                            <div className='text-black'>(+84) 345 972 986</div>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-1'>
                            <BiLogoGmail size={25} className='rounded-full p-1 border-[2px] border-black text-black' />
                            <div className='text-black'>info@kysaw.vn</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center items-center' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <div className='flex justify-between items-center pl-10 pr-10 pt-2 pb-2 max-w-[1220px] w-full flex-col sm:gap-2 sm:flex-row' >
                    <div className='flex justify-center items-center'>
                        <Image src={imgShared.logos.white} alt='logo' width={120} height={120} />
                    </div>
                    <div className='flex justify-start items-center gap-2'>
                        <BiSolidMap size={30} className='rounded-full p-1 border-[2px] border-white text-white text-nowrap' />
                        <div className='text-white'>373/48 Âu Cơ, Phường Phú Trung, Quận Tân Phú, TPHCM, Việt Nam</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
