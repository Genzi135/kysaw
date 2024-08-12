import { COLOR } from "../utils/COLORS";
import logowhite from '../../assets/Logo/KYSAW_LOGO_FINAL_WHITE_COLOR.png'
import Image from "next/image";

export default function ProductCard({ data }) {

    return (
        <div className='w-[300px] sm:w-[550px] h-[300px] flex justify-center items-center relative duration-300 mb-[150px] sm:mb-0 z-30 group'>
            <a href={`/product/${data.productId}`} className="cursor-pointer absolute z-30 sm:top-4 sm:left-[20px] -top-10">
                <Image src={data.avatarUrl && data.avatarUrl} alt='avatar' width={200} height={200} />
            </a>
            <div className='w-full h-[90px] top-[30px] sm:top-[auto] sm:w-[210px] sm:h-[55%] absolute sm:bottom-4 z-20 sm:left-[16px] sm:rounded-xl rounded-t-xl ' style={{ backgroundColor: data.color && data.color }}>
                <Image src={logowhite} alt="logo" width={130} height={130} className=' sm:bottom-0 sm:mt-[100px] sm:ml-2 hidden sm:block' />
            </div>
            <div className='w-full h-[100%] shadow-2xl relative z-10 mt-[200px] sm:ml-[120px] sm:rounded-r-xl bg-white sm:mt-0 rounded-b-xl sm:rounded-b-none group-hover:shadow-black/50'>
                <div className="absolute p-5 w-full sm:h-[75%] sm:w-[330px] sm:right-0 flex flex-col items-center sm:pt-5 h-[50%] overflow-hidden mt-[50px] sm:mt-0">
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
