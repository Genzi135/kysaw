'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ModalContact from './ModalContact';
import FormContact from './FormContact';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const menu = [
        {
            id: 1,
            title: 'Trang chủ',
            tag: '/',
        }, {
            id: 2,
            title: 'Sản phẩm',
            tag: '/product',
        },
    ]

    const path = usePathname();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleFreeConsultClick = () => {
        if (window.innerWidth >= 768) {
            setIsModalOpen(true);
        } else {
            setIsFormOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='w-[100vw] h-auto flex justify-center items-center pl-5 pr-5 fixed top-0 z-50 border-b-gray-300 border-b-[0.1px] shadow-md p-2 bg-white'>
            <div className=" flex justify-between items-center w-full max-w-[1220px]">
                <Link href={'/'} className="flex justify-center items-center p-2">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="hidden md:flex justify-center items-center gap-10">
                    {menu.map((e) => {
                        return (
                            <Link href={e.tag}
                                key={e.id}
                                className={`flex text-base justify-center items-center cursor-pointer font-manropeBold relative hover:before:w-[100%] hover:text-[#1b6891] pl-1 pr-1 pt-3 pb-3 ${e.tag === path ? "before:w-full before:bg-black" : ""} before:bg-[#1b6891] before:w-[0%] before:left-0 before:absolute before:content-[''] before:h-[2px] before:duration-300 before:bottom-0`}
                            >
                                {e.title}
                            </Link>
                        )
                    })}
                    <div className="dropdown dropdown-hover">
                        <div
                            className={`flex text-base justify-center items-center cursor-pointer font-manropeBold relative hover:before:w-[100%] hover:text-[#1b6891] pl-1 pr-1 pt-3 pb-3 ${'/about' === path ? "before:w-full before:bg-black" : ""} before:bg-[#1b6891] before:w-[0%] before:left-0 before:absolute before:content-[''] before:h-[2px] before:duration-300 before:bottom-0`}
                        >
                            {'Thông tin'}
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 bg-white rounded-box z-[1] w-52 p-2 shadow text-base">
                            <li><a href='/about'>Về chúng tôi</a></li>
                            <li><a href='/about#jh-bioholdings'>JH Bioholdings</a></li>
                            <li><a href='/about#genesolutions'>Gene Solotions</a></li>
                            <li><a href='/announcement'>Thông báo</a></li>
                            <li><a href='/consultants'>Tư vấn viên</a></li>
                            <li><a href='/recruitment'>Tuyển dụng</a></li>
                        </ul>
                    </div>
                    {/* <button className='btn text-white transition-transform duration-200 ease-linear hover:scale-105 font-manrope text-base' style={{ backgroundColor: COLOR.backgroundPrimary }} onClick={handleFreeConsultClick}>Tư vấn miễn phí</button> */}
                </div>
                <div className="flex md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
                <div className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-md z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-end p-4">
                        <button onClick={toggleMenu}>
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-start p-4">
                        {menu.map((e) => {
                            return (
                                <Link href={e.tag}
                                    key={e.id}
                                    className={`block p-4 hover:bg-gray-100 cursor-pointer ${e.tag === path ? " font-manropeBold" : ""}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {e.title}
                                </Link>
                            )
                        })}
                        <div className="">
                            <div
                                className={`block p-4 hover:bg-gray-100 cursor-pointer ${"/about" === path ? " font-manropeBold" : ""}`}
                            >
                                {'Thông tin'}
                            </div>
                            <ul tabIndex={0} className="menu bg-base-100 z-[1] w-52 pl-6 text-base bg-white">
                                <li><a href='/about'>Về chúng tôi</a></li>
                                <li><a href='/about#jh-bioholdings'>JH Bioholdings</a></li>
                                <li><a href='/about#genesolutions'>Gene Solotions</a></li>
                                <li><a href='/announcement'>Thông báo</a></li>
                                <li><a href='/consultants'>Tư vấn viên</a></li>
                                <li><a href='/recruitment'>Tuyển dụng</a></li>
                            </ul>
                        </div>
                        {/* <button className='btn text-white mt-4 transition-transform duration-200 ease-linear hover:scale-105 font-manrope' style={{ backgroundColor: COLOR.backgroundPrimary }} onClick={handleFreeConsultClick}>Tư vấn miễn phí</button> */}
                    </div>
                </div>
            </div>

            {/* Modal for Desktop */}
            {isModalOpen && (
                <ModalContact closeModal={closeModal} />
            )}

            {/* Form for Mobile */}
            {isFormOpen && (
                <FormContact setIsFormOpen={setIsFormOpen} />

            )}
        </div>
    );
};

export default Navbar;
