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
        <div className='w-[300px] sm:w-[550px] h-[300px] flex justify-center items-center relative duration-300 mb-[150px] sm:mb-0'>
            <a href={`/product/${data.productId}`} className="cursor-pointer absolute z-30 sm:top-4 sm:left-[20px] -top-10">
                <Image src={data.avatarUrl && data.avatarUrl} alt='avatar' width={200} height={200} />
            </a>
            <div className='w-full h-[90px] top-[30px] sm:top-[auto] sm:w-[210px] sm:h-[55%] absolute sm:bottom-4 z-20 sm:left-[16px] sm:rounded-xl rounded-t-xl ' style={{ backgroundColor: data.color && data.color }}>
                <Image src={logowhite} alt="logo" width={130} height={130} className=' sm:bottom-0 sm:mt-[100px] sm:ml-2 hidden sm:block' />
            </div>
            <div className='w-full h-[100%] shadow-2xl relative z-10 mt-[200px] sm:ml-[120px] sm:rounded-r-xl bg-white sm:mt-0 rounded-b-xl sm:rounded-b-none'>
                <div className="absolute p-5 w-full sm:h-[76%] sm:w-[330px] sm:right-0 flex flex-col items-center sm:pt-5 h-[50%] overflow-hidden mt-[50px] sm:mt-0">
                    <a href={`/product/${data.productId}`} className="cursor-pointer hover:underline">
                        <label className="font-manropeBold text-xl sm:mt-2">{data.productName}</label>
                    </a>
                    <div className=" mt-2 space-y-2 sm:text-left w-full overflow-y-hidden sm:text-base text-sm sm:mt-8">
                        {data.indicators && data.indicators.map((e, index) => {
                            return (
                                <div key={index} className="text-ellipsis ">{e}<br></br></div>
                            )
                        })}
                    </div>
                </div>
                <div className="absolute bottom-[80px] left-[20px] sm:hidden">...</div>
                <a href={`/product/${data.productId}`} className="w-full flex justify-center items-center">
                    <button className='sm:bottom-6 sm:right-6 bottom-2 btn absolute text-white' style={{ backgroundColor: COLOR.backgroundPrimary }}>Tìm hiểu thêm </button>
                </a>
            </div>
        </div>
    );
}
