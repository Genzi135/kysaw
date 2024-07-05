'use client'
import { COLOR } from '@/utils/COLORS'
import logowhite from '../../../../assets/Logo/KYSAW_LOGO_FINAL_WHITE_COLOR.png'
import '../../globals.css'
import Image from 'next/image'

export default function Test() {

    return (
        <div className="mt-24 flex justify-center items-center mb-20 gap-10 flex-wrap">
            <div className='w-[500px] h-[300px] flex justify-center items-center relative'>
                <img src='https://res.cloudinary.com/diribdgsz/image/upload/v1719920402/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_button_n5p1ps.svg' alt='avatar' width={200} height={200} className='absolute z-30 top-4 left-[20px]' />
                <div className='w-[250px] h-[55%] absolute bg-yellow-400  z-20 left-[-4px] bottom-4 rounded-xl'>

                </div>
                <div className='w-full h-[100%] shadow-2xl relative z-10 ml-[120px] rounded-r-xl'>

                </div>
            </div>


        </div>
    )
}