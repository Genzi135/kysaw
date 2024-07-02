import { COLOR } from "@/utils/COLORS";
import { formatCurrency } from "@/utils/format";
import { useState } from "react";

export default function ProductCard({ data }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col justify-center bg-white shadow-xl rounded-lg p-5 gap-1 min-w-[350px] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={data.avatarUrl && data.avatarUrl} alt={data.productName} width={300} height={300} />
            <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && data.productName}</label>
            <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && data.price}</label>

            <div
                className={`absolute left-0 bottom-0 bg-white shadow-lg p-4 transition-transform duration-500 flex flex-col justify-between ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ width: '100%', height: '100%' }}
            >
                <label>Chi tiết sản phẩm</label>
                <p>{data.description}</p>
                <a href={`/product/${data.productId}`} className="flex justify-center items-center">
                    <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>Xem chi tiết</button>
                </a>
            </div>
        </div>
    );
}
