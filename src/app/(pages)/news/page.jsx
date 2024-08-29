import Image from "next/image";
import { COLOR } from "../../../utils/COLORS";
import { imgShared } from "../../../utils/images";
import NewsCard from '../../../components/NewsCard';

export default function News() {
    const data = [
        {
            type: "Thông báo",
            title: "Về việc thay đổi đại diện pháp nhân và CEO của Công ty",
            time: "29/08/2024",
            pdf: "https://kysaw.s3.ap-southeast-1.amazonaws.com/Thong+Bao+CEO.pdf"
        },
    ]
    return (
        <div className="mt-[70px] scroll-smooth">
            <div id="about" className="flex justify-center items-center" style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},#15BEF2)` }}>
                <Image src={imgShared.Banner.MainBanner} alt="banner" layout="responsive" className="max-w-[1220px]" />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-auto">
                <div className="w-full max-w-[1220px] flex flex-col justify-center items-center mb-10">
                    <label className="text-2xl font-manropeBold md:text-4xl p-10">Tin Tức</label>
                    {data.map((e, index) => {
                        return (
                            <NewsCard data={e} key={index} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}