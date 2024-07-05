import { COLOR } from "@/utils/COLORS";
import logowhite from '../../assets/Logo/KYSAW_LOGO_FINAL_WHITE_COLOR.png'
import Image from "next/image";

export default function ProductCard({ data }) {

    return (
        // <div
        //     className="relative flex flex-col justify-center bg-white shadow-xl rounded-lg p-5 gap-1 min-w-[350px] overflow-hidden"
        //     onMouseEnter={() => setIsHovered(true)}
        //     onMouseLeave={() => setIsHovered(false)}
        // >
        //     <img src={data.avatarUrl && data.avatarUrl} alt={data.productName} width={300} height={300} />
        //     <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && data.productName}</label>
        //     <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && data.price}</label>

        //     <div
        //         className={`absolute left-0 bottom-0 bg-white shadow-lg p-4 transition-transform duration-500 flex flex-col justify-between ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
        //         style={{ width: '100%', height: '100%' }}
        //     >
        //         <label>Chi tiết sản phẩm</label>
        //         <p>{data.description}</p>
        //         <a href={`/product/${data.productId}`} className="flex justify-center items-center">
        //             <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>Xem chi tiết</button>
        //         </a>
        //     </div>
        // </div>
        <div className='w-[500px] h-[300px] flex justify-center items-center relative'>
            <img src={data.avatarUrl && data.avatarUrl} alt='avatar' width={200} height={200} className='absolute z-30 top-4 left-[20px]' />
            <div className='w-[250px] h-[55%] absolute bottom-4  z-20 left-[-4px] rounded-xl' style={{ backgroundColor: data.color && data.color }}>
                <Image src={logowhite} width={130} height={130} className=' bottom-0 mt-[100px] ml-2' />
            </div>
            <div className='w-full h-[100%] shadow-2xl relative z-10 ml-[120px] rounded-r-xl'>
                <div className="absolute p-5 h-[75%] w-[260px] right-0 flex flex-col items-center pt-5 text-ellipsis whitespace-pre-wrap overflow-hidden">
                    <label className="font-manropeBold text-xl">{data.productName}</label>
                    <div className="text-ellipsis mt-2">
                        {data.indicators && data.indicators.map((e, index) => {
                            return (
                                <div key={index} className="text-ellipsis">{e}</div>
                            )
                        })}
                    </div>
                </div>
                <a href={`/product/${data.productId}`}>
                    <button className='bottom-6 right-6 btn absolute text-white' style={{ backgroundColor: COLOR.backgroundPrimary }}>Tìm hiểu thêm </button>
                </a>
            </div>
        </div>
    );
}
