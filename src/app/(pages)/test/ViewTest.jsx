'use client'
import '../../globals.css'

export default function ViewTest() {

    const genloveskinLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_button_ehlpxl.svg';
    const genlovekidLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920402/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_button_n5p1ps.svg';
    const genlovemeLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920398/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_button_ehrsok.svg';
    const genlovefitLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_Button_rxrnc4.svg';
    const gencarepreLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_button_oz5lyn.svg';
    const yamugenLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920403/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Button_yhc7n3.svg';

    const skindesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920398/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_Tag_nqgsk0.svg';
    const kiddesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920399/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_Tag_slhy6o.svg';
    const medesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_Tag_fcsp5d.svg';
    const fitdesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_Tag_oyoubt.svg';
    const yamudesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920404/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Tag_ixomz2.svg';
    const gencarepredesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_Tag_mphl8m.svg';

    const subitem = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_DNA_nip_qiosut.svg';

    const bg1 = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Ribbon_pueyvf.svg';
    const bg2 = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Ribbon_short_dri7hh.svg'


    return (
        <div className=" flex justify-center items-center gap-20">
            <div className='flex flex-col gap-2 items-center p-10' style={{}}>
                <img src={bg1} alt='bg' width={750} height={1700} className='relative opacity-80' />
                <div className='absolute flex -translate-x-8 translate-y-8'>
                    <img src={subitem} alt='subitem' width={90} height={90} className='rotate-180 opacity-50' />
                    <img src={subitem} alt='subitem' width={150} height={150} className='translate-y-2 opacity-65' />
                </div>

                <div className='absolute flex gap-1 translate-y-[100px] -translate-x-8'>
                    <img src={subitem} alt='subitem' width={180} height={180} className='rotate-180 translate-x-2 translate-y-5 opacity-80' />
                    <img src={medesc} alt='desc' width={200} height={200} className='animate-' />
                    <img src={genlovemeLogoHex} alt='item' width={230} height={230} className='animate-float' />
                </div>
                <div className='absolute flex gap-1 translate-y-[300px] translate-x-6'>
                    <img src={genloveskinLogoHex} alt='item' width={320} height={320} className='animate-float' />
                    <img src={skindesc} alt='desc' width={280} height={280} className='animate-' />
                    <img src={subitem} alt='subitem' width={250} height={250} className=' translate-y-[-22px] opacity-90  ' />
                </div>

                <div className='absolute flex gap-1 translate-y-[530px] translate-x-32'>
                    <img src={kiddesc} alt='desc' width={200} height={200} className='animate-' />
                    <img src={genlovekidLogoHex} alt='item' width={230} height={230} className='animate-float' />
                </div>
                <div className='absolute flex gap-1 translate-y-[700px] -translate-x-32'>
                    <img src={genlovefitLogoHex} alt='item' width={290} height={290} className='animate-float' />
                    <img src={fitdesc} alt='desc' width={250} height={250} className='animate-' />
                    <img src={subitem} alt='subitem' width={160} height={160} className=' translate-y-[-22px] opacity-65' />
                </div>

                <div className='absolute flex gap-1 translate-y-[900px] '>
                    <img src={subitem} alt='subitem' width={180} height={180} className='rotate-180 translate-x-2 translate-y-5 opacity-80' />
                    <img src={yamudesc} alt='desc' width={280} height={280} className='animate-' />
                    <img src={yamugenLogoHex} alt='item' width={340} height={340} className='animate-float' />
                </div>
                <div className='absolute flex gap-1 translate-y-[1197px] -translate-x-14'>
                    <img src={gencarepreLogoHex} alt='item' width={300} height={300} className='animate-float' />
                    <img src={gencarepredesc} alt='desc' width={250} height={250} className='animate-' />
                </div>

            </div>
        </div>
    )
}