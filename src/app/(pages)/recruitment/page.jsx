import Link from "next/link";
import { RecruitmentData } from "./[id]/data";
import { COLOR } from "@/utils/COLORS";
import { BsCashStack, BsPersonVcard, BsPinMapFill } from "react-icons/bs";

export default function Recruitment() {

    return (
        <div className="mt-[72px] flex flex-col justify-center items-center scroll-smooth">
            <div className="flex justify-center items-center w-full" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <div className="flex justify-center items-center max-w-[1220px] w-full p-10" >
                    <label className="md:text-4xl text-2xl font-manropeBold text-white">KYSAW - Giải mã Gen vẹn toàn sức khỏe</label>
                </div>
            </div>
            <div className="flex justify-center items-center max-w-[1000px] w-full p-5">
                {RecruitmentData.map((e) => {
                    return (
                        <div key={e.id} className="w-full rounded-box shadow-md hover:shadow-lg flex flex-col p-5">
                            <div className="border-b-2 pb-2  pt-2 flex justify-between items-center">
                                <Link href={`/recruitment/${e.id}`} className="text-xl font-manropeBold hover:underline">{e && e.name}</Link>
                                <div className="p-2 pl-2 pr-2 rounded-full text-white text-nowrap" style={{ backgroundColor: COLOR.backgroundPrimary }}>{e && e.time}</div>
                            </div>
                            <div className="pt-2 ">
                                <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row">
                                    <div className="flex justify-center items-center gap-2"><BsPinMapFill size={20} /> {e && e.location}</div>
                                    <div className="flex justify-center items-center gap-2"><BsCashStack size={20} /> {e && e.salary}</div>
                                    <div className="flex justify-center items-center gap-2"><BsPersonVcard size={20} /> {e && e.role}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full max-w-[1220px] flex flex-col justify-center items-center p-5">
                <label>
                    Bạn có thể liên hệ trực tiếp với KYSAW thông qua:
                </label>
                <label>Email: <label className="font-manropeBold">info@kysaw.vn</label></label>
                <label>Điện thoại: <label className="font-manropeBold">(+84) 345 972 986</label></label>
            </div>
            {/* <div className="w-full max-w-[1220px] flex flex-col justify-center items-center p-5">
                Quy trình Tuyển dụng của KYSAW
            </div>
            <div className="w-full max-w-[1220px] flex flex-col justify-center items-center p-5">
                Câu hỏi thường gặp
            </div> */}
        </div>
    )
}