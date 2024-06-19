import { COLOR } from "@/utils/COLORS";
import { formatCurrency } from "@/utils/format";
export default function ProductCard({ data }) {
    return (
        <div className="flex flex-col justify-center bg-white shadow-2xl rounded-lg p-5 gap-1 min-w-80">
            <img src={data.avatarUrl && data.avatarUrl} alt={data.productName} width={300} height={300} />
            <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && data.productName}</label>
            <label className="flex justify-center items-center text-lg md:text-xl font-manropeBold">{data && formatCurrency(data.price)}</label>
            {/* <div className="flex flex-col">
                <label>
                    {data.details && data.details[0].sectionTitle}
                </label>
                {data.details && data.details[0].sectionContent.type === 'list' && data.details[0].sectionContent.items.map((e, index) => {
                    return (<label key={index}>{e.text}</label>);
                })}
            </div> */}
            <a href={`/product/${data.productId}`} className="flex justify-center items-center">
                <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>Xem chi tiết</button>
            </a>
        </div>
    );
}
