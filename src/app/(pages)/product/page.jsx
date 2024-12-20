'use client'
import ProductCard from "../../../components/ProductCard";
import ProductData from "./[id]/data";
import ProductSlider from "../../../components/ProductSlider";
import { COLOR } from "../../../utils/COLORS";

export default function Product() {

    const viewPriceList = () => {
        window.open("https://kysaw.s3.ap-southeast-1.amazonaws.com/KYSAW+-+Bang+Bao+Gia+Ban+Le+-+24Oct23.pdf")
    }

    return (
        <div className="scroll-smooth mt-14">
            <div className="w-full h-auto flex justify-center items-center">
                <ProductSlider />
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 bg-gray-50">
                <label className="text-black text-xl md:text-3xl font-manropeBold p-5">Dịch vụ gen từ chúng tôi</label>
                <div className="flex flex-1 md:pl-5 md:pr-5 flex-wrap justify-around items-center gap-5 md:gap-10 max-w-[1220px] mb-10 sm:mb-24">
                    {ProductData.map((e, index) => {
                        return (
                            <ProductCard data={e} key={index} />
                        );
                    })}
                    <div className="w-full mt-[36px]">
                        <label onClick={() => viewPriceList()} className="ml-[40px] md:text-xl hover:underline cursor-pointer" style={{ color: COLOR.backgroundPrimary }}>Xem bảng giá bán lẻ</label>
                    </div>
                </div>

            </div>
        </div>
    );
}
