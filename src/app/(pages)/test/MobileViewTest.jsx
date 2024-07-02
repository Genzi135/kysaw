import Image from 'next/image';
import '../../globals.css'

export default function MobileViewTest() {

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


    return (
        <div className='flex flex-col justify-center items-center mt-10 relative w-full max-w-[1220px] h-auto'>
            <Image src={bg1} alt='background image' width={400} height={700} layout='fit' />
            <div className='flex justify-center items-center gap-2 flex-row absolute top-0'>
                <img src={genlovemeLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={medesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-2 flex-row-reverse absolute top-[130px]'>
                <img src={genloveskinLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={skindesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-2 flex-row absolute top-[260px]'>
                <img src={genlovekidLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={kiddesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-2 flex-row-reverse absolute top-[390px]'>
                <img src={genlovefitLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={fitdesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-2 flex-row absolute top-[520px]'>
                <img src={gencarepreLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={gencarepredesc} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-2 flex-row-reverse absolute top-[650px]'>
                <img src={yamugenLogoHex} alt='logoHex' width={150} height={150} className='animate-float' />
                <img src={yamudesc} alt='desc' width={150} height={150} />
            </div>
        </div>
    )
}
