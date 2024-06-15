import Image from 'next/image';
import Logo from '../../assets/Logo/KYSAW_LOGO_FINAL_WHITE_COLOR.png';
import { COLOR } from '@/utils/COLORS';
import { BiLogoGmail, BiSolidMap, BiSolidPhoneCall } from 'react-icons/bi';
import Link from 'next/link';
export default function Footer() {
    return (
        <div className="min-w-[100%] bg-gray-100 flex flex-col">
            <div className='flex justify-around items-start flex-col md:flex-row ml-5 mr-5 mb-5'>
                <div className='flex flex-col justify-center items-start mt-5'>
                    <label className='text-xl font-semibold mb-1'>Sản phẩm</label>
                    <Link href={'/'} className='hover:text-teal-500'>YamuGene</Link>
                    <Link href={'/'} className='hover:text-teal-500'>GenePremium</Link>
                    <Link href={'/'} className='hover:text-teal-500'>GeneLove</Link>
                    <Link href={'/'} className='hover:text-teal-500'>Giải mã gen</Link>
                </div>
                <div className='flex flex-col justify-center items-start mt-5'>
                    <label className='text-xl font-semibold mb-1'>Công ty</label>
                    <Link href={'/'} className='hover:text-teal-500'>Về chúng tôi</Link>
                    <Link href={'/'} className='hover:text-teal-500'></Link>
                </div>
                <div className='flex flex-col justify-center items-start mt-5'>
                    <label className='text-xl font-semibold mb-1'>Liên hệ</label>
                    <Link href={'/'} className='hover:text-teal-500'>Tư vấn gen (Miễn phí)</Link>
                    <div className='flex justify-start items-center gap-2 mt-1'>
                        <BiSolidPhoneCall size={30} className='rounded-full p-1 border-[2px] border-black text-black' />
                        <div className='text-black'>(+84) 977 565 645</div>
                    </div>
                    <div className='flex justify-start items-center gap-2 mt-1'>
                        <BiLogoGmail size={30} className='rounded-full p-1 border-[2px] border-black text-black' />
                        <div className='text-black'>kysawgenetic@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-around items-center pl-10 pr-10 pt-2 pb-2 flex-wrap' style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <div className='flex justify-center items-center'>
                    <Image src={Logo} alt='logo' width={120} height={120} />
                </div>
                {/* <div className='flex justify-start items-center gap-2'>
                    <BiSolidPhoneCall size={30} className='rounded-full p-1 border-[2px] border-white text-white' />
                    <div className='text-white'>(+84) 977 565 645</div>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <BiLogoGmail size={30} className='rounded-full p-1 border-[2px] border-white text-white' />
                    <div className='text-white'>kysawgenetic@gmail.com</div>
                </div> */}
                <div className='flex justify-start items-center gap-2'>
                    <BiSolidMap size={30} className='rounded-full p-1 border-[2px] border-white text-white' />
                    <div className='text-white'>373/48 Âu Cơ, Q. Tân Phú,TPHCM</div>
                </div>
            </div>
        </div>
    )
}