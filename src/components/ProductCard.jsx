import { COLOR } from "@/utils/COLORS";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";

export default function ProductCard({ data }) {
    return (
        <div className="flex flex-col justify-center  bg-white shadow-2xl rounded-lg p-5 gap-1 max-w-80 ">
            <Image src={data.image && data.image} alt={data.title} width={300} height={300} />
            <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && data.title}</label>
            <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && formatCurrency(data.price)}</label>
            <div className="flex flex-col">
                <label>
                    {data.content && data.content.title}
                </label>
                {data.content && data.content.benefit.map((e, index) => {
                    return (<label key={index}>{e}</label>)
                })}
            </div>
            <a href={data.link} className="flex justify-center items-center">
                <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>Xem chi tiết</button>
            </a>
        </div>
    )
}