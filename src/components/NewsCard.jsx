'use client'
import { COLOR } from "../utils/COLORS";

export default function NewsCard(data) {
    return (
        <div className="w-full rounded-box border p-5 flex flex-col">
            <div className="flex justify-between items-center">
                <label>CÔNG TY Cổ phần KYSAW</label>
                <label>{data.data.time && data.data.time}</label>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <label className="text-2xl md:text-4xl font-manropeBold">{data && data.data.type}</label>
                <label className="text-xl">{data.data.title}</label>
                <div
                    onClick={() => { window.open(data.data.pdf, '_blank') }}
                    style={{ color: COLOR.backgroundPrimary }}
                    className="cursor-pointer hover:underline"
                >
                    Xem chi tiết
                </div>
            </div>
        </div>
    )
}