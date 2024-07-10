import { imgShared } from '@/utils/images'
import '../app/globals.css'
import Image from 'next/image'

export default function HomeSubBanner() {
    return (
        <div className='flex flex-col justify-center items-center mt-10 relative w-full max-w-[1220px] h-auto pb-20'>
            <Image src={imgShared.dnaBackground.primary} alt='background image' width={400} height={750} layout='fit' />
            <div className='flex justify-center items-center gap-[3px] flex-row-reverse absolute top-0'>
                <Image src={imgShared.genLoveMe.hex} alt='logoHex' width={120} height={120} className='animate-float' />
                <Image src={imgShared.genLoveMe.tag} alt='desc' width={120} height={120} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row absolute top-[100px]'>
                <Image src={imgShared.genLoveSkin.hex} alt='logoHex' width={180} height={180} className='animate-float' />
                <Image src={imgShared.genLoveSkin.tag} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row-reverse absolute top-[260px]'>
                <Image src={imgShared.genLoveKid.hex} alt='logoHex' width={120} height={120} className='animate-float' />
                <Image src={imgShared.genLoveKid.tag} alt='desc' width={120} height={120} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row absolute top-[370px]'>
                <Image src={imgShared.genLoveFit.hex} alt='logoHex' width={140} height={140} className='animate-float' />
                <Image src={imgShared.genLoveFit.tag} alt='desc' width={120} height={120} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row-reverse absolute top-[500px]'>
                <Image src={imgShared.yamuGen.hex} alt='logoHex' width={190} height={190} className='animate-float' />
                <Image src={imgShared.yamuGen.tag} alt='desc' width={150} height={150} />
            </div>
            <div className='flex justify-center items-center gap-[3px] flex-row absolute top-[670px]'>
                <Image src={imgShared.genCarePre.hex} alt='logoHex' width={150} height={150} className='animate-float' />
                <Image src={imgShared.genCarePre.tag} alt='desc' width={150} height={150} />
            </div>
        </div>
    )
}
