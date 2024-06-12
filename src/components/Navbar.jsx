'use client'
import { useState } from 'react';
import Image from "next/image";
import Logo from '../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        }, {
            id: 4,
            title: 'Liên hệ',
            tag: '/contact',
        },
    ]

    const path = usePathname();
    console.log(path);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="min-w-[100%] h-auto flex justify-between items-center pl-5 pr-5 fixed top-0 z-50 bg-white border-b-gray-300 border-b-[0.1px] shadow-md">
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
                            className={`flex justify-center items-center p-2 hover:bg-gray-100 cursor-pointer ${e.tag === path ? " font-semibold" : ""}`}
                        >
                            {e.title}
                        </Link>
                    )
                })}
            </div>
            <div className="flex md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
                    {menu.map((e) => {
                        return (
                            <Link href={e.tag}
                                key={e.id}
                                className={`block p-4 hover:bg-gray-100 cursor-pointer ${e.tag === path ? " font-semibold" : ""}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {e.title}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Navbar;
