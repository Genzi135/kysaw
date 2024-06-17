'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { COLOR } from '@/utils/COLORS';
import { BiLogoGmail, BiSolidPhoneCall } from 'react-icons/bi'
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
            title: 'Giới thiệu',
            tag: '/about',
        }, {
            id: 3,
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
        <div>
            <div className="min-w-[100%] h-auto flex justify-between items-center pl-5 pr-5 fixed top-0 z-50 bg-white border-b-gray-300 border-b-[0.1px] shadow-md p-2">
                <Link href={'/'} className="flex justify-center items-center p-2">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                </Link>
                <div className="hidden md:flex justify-center items-center gap-5">
                    {menu.map((e) => {
                        return (
                            <Link href={e.tag}
                                key={e.id}
                                className={`flex justify-center items-center p-2 hover:bg-gray-100 cursor-pointer ${e.tag === path ? " font-manropeBold" : ""}`}
                            >
                                {e.title}
                            </Link>
                        )
                    })}
                    <button className='btn text-white transition-transform duration-200 ease-linear hover:scale-105 font-manrope' style={{ backgroundColor: COLOR.backgroundPrimary }} onClick={handleFreeConsultClick}>Tư vấn miễn phí</button>
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
                        <button className='btn text-white mt-4 transition-transform duration-200 ease-linear hover:scale-105 font-manrope' style={{ backgroundColor: COLOR.backgroundPrimary }} onClick={handleFreeConsultClick}>Tư vấn miễn phí</button>
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
