'use client'
import '../../src/app/globals.css'

import { useState } from "react"
import { BsFillTelephoneFill, BsPhone } from "react-icons/bs";

export default function FloatingMenu() {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const directToZalo = () => {
        window.open('https://zalo.me/0345972986')
    }
    const directToMessenger = () => {
        window.open('https://www.facebook.com/messages/t/354954147701414')
    }
    return (
        <div className="fixed bottom-5 right-2">
            <div className="flex flex-col justify-center items-center gap-5 pb-5">
                <div onClick={() => directToZalo()} className={`${isOpenMenu ? "scale-100 -translate-y-2 visible" : "scale-0 translate-y-8 invisible"} duration-200 ease-linear`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png" alt="zalo" width={40} height={40} />
                </div>
                <div onClick={() => directToMessenger()} className={`${isOpenMenu ? "scale-100 -translate-y-2 visible" : "scale-0 translate-y-8 invisible"} duration-200 ease-linear`}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg" alt="messenger" width={40} height={40} />
                </div>
                <div onClick={() => setOpenMenu(!isOpenMenu)}>
                    <img src='https://res.cloudinary.com/diribdgsz/image/upload/v1719911519/kysaw/KYSAW_Contact_button-01_cjvcyl.svg' alt='contactButton' width={50} height={50} />
                </div>
            </div>


        </div>
    )
}