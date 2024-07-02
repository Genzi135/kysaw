import Image from 'next/image';
import '../../globals.css'

export default function MobileViewTest() {

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
        <div className='flex flex-col justify-center items-center mt-10 relative w-full max-w-[1220px] h-auto'>
            <Image src={bg1} alt='background image' width={400} height={700} layout='fit' />
            <div className='flex justify-center items-center gap-[3px] flex-row-reverse absolute top-0'>
                <img src={genlovemeLogoHex} alt='logoHex' width={120} height={120} className='animate-float' />
                <img src={medesc} alt='desc' width={120} height={120} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row absolute top-[100px]'>
                <img src={genloveskinLogoHex} alt='logoHex' width={180} height={180} className='animate-float' />
                <img src={skindesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row-reverse absolute top-[260px]'>
                <img src={genlovekidLogoHex} alt='logoHex' width={120} height={120} className='animate-float' />
                <img src={kiddesc} alt='desc' width={120} height={120} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row absolute top-[370px]'>
                <img src={genlovefitLogoHex} alt='logoHex' width={140} height={140} className='animate-float' />
                <img src={fitdesc} alt='desc' width={120} height={120} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row-reverse absolute top-[500px]'>
                <img src={yamugenLogoHex} alt='logoHex' width={190} height={190} className='animate-float' />
                <img src={yamudesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row absolute top-[670px]'>
                <img src={gencarepreLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={gencarepredesc} alt='desc' width={150} height={150} />
            </div>
        </div>
    )
}
