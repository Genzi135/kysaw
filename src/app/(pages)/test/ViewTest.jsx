'use client'
import { useEffect, useState } from 'react';
import '../../globals.css'

export default function ViewTest() {

    const genloveskinLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875922/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_button_vasvrs.svg';
    const genlovekidLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875914/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_button_fqpe8f.svg';
    const genlovemeLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875916/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_button_m8qxpa.svg';
    const genlovefitLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_Button_vlitfa.svg';
    const yamugenLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Button_ybosez.svg';
    const gencarepreLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_button_v04xnm.svg';

    const genlovskinlogo = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875925/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_org_yggjhu.svg';
    const genlovekidlogo = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875914/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_org_j3czui.svg';
    const genlovemelogo = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875919/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_org_weqgap.svg';
    const genlovefitlogo = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875913/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_org_mwvvr5.svg';
    const yamugenLogo = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875928/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Org_jq2net.svg';
    const gencarepreLogo = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_org_kumdzh.svg';

    const skindesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875925/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_Tag_xsma7p.svg';
    const kiddesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875915/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_Tag_ppngas.svg';
    const medesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875921/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_Tag_wabzvl.svg';
    const fitdesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875913/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_Tag_tankae.svg';
    const yamudesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_Tag_k98qdd.svg';
    const gencarepredesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875929/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Tag_libxt8.svg';

    const subitem = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_DNA_nip_qiosut.svg';

    const bg1 = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Ribbon_pueyvf.svg';
    const bg2 = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Ribbon_short_dri7hh.svg'


    useEffect(() => {
        // const interval = setInterval(() => {
        //     setIndexImage((prevIndex) => (prevIndex + 1) % productData.length);
        // }, 5000);

        // return () => {
        //     clearInterval(interval);
        // };
    }, []);
    return (
        <div className=" flex justify-center items-center gap-20">
            <div className=' hidden lg:flex flex-col gap-2 items-center p-10' style={{}}>
                <img src={bg1} alt='bg' width={750} height={1700} className='relative' />
                <div className='absolute flex translate-x-10 translate-y-4'>
                    <img src={subitem} alt='subitem' width={90} height={90} className='rotate-180 opacity-50' />
                    <img src={subitem} alt='subitem' width={150} height={150} className='translate-y-2 opacity-65' />
                </div>

                <div className='absolute flex gap-4 translate-y-[100px] -translate-x-8'>
                    <img src={subitem} alt='subitem' width={180} height={180} className='rotate-180 translate-x-2 translate-y-5 opacity-80' />
                    <img src={medesc} alt='desc' width={250} height={250} className='animate-' />
                    <img src={genlovemeLogoHex} alt='item' width={230} height={230} className='animate-float' />
                </div>
                <div className='absolute flex gap-4 translate-y-[300px] translate-x-6'>
                    <img src={genloveskinLogoHex} alt='item' width={300} height={300} className='animate-float' />
                    <img src={skindesc} alt='desc' width={300} height={300} className='animate-' />
                    <img src={subitem} alt='subitem' width={250} height={250} className='-translate-x-6 translate-y-[-22px] opacity-90  ' />
                </div>

                <div className='absolute flex gap-4 translate-y-[520px] translate-x-32'>
                    <img src={kiddesc} alt='desc' width={250} height={250} className='animate-' />
                    <img src={genlovekidLogoHex} alt='item' width={230} height={230} className='animate-float' />
                </div>
                <div className='absolute flex gap-6 translate-y-[700px] -translate-x-4'>
                    <img src={genlovefitLogoHex} alt='item' width={300} height={300} className='animate-float' />
                    <img src={fitdesc} alt='desc' width={300} height={300} className='animate-' />
                    <img src={subitem} alt='subitem' width={250} height={250} className='-translate-x-6 translate-y-[-22px] opacity-65' />
                </div>

                <div className='absolute flex gap-4 translate-y-[920px] -translate-x-10'>
                    <img src={subitem} alt='subitem' width={180} height={180} className='rotate-180 translate-x-2 translate-y-5 opacity-80' />
                    <img src={yamudesc} alt='desc' width={280} height={280} className='animate-' />
                    <img src={yamugenLogoHex} alt='item' width={280} height={280} className='animate-float' />
                </div>
                <div className='absolute flex gap-4 translate-y-[1197px] '>
                    <img src={gencarepreLogoHex} alt='item' width={300} height={300} className='animate-float' />
                    <img src={gencarepredesc} alt='desc' width={300} height={300} className='animate-' />
                </div>
            </div>
        </div>
    )
}