import Link from "next/link";
import { RecruitmentData } from "./[id]/data";
import { COLOR } from "@/utils/COLORS";
import { BsCashStack, BsPersonVcard, BsPinMapFill } from "react-icons/bs";

export default function Recruitment() {

    return (
        <div className="mt-20 flex flex-col justify-center items-center">
            <div className="flex justify-center items-center w-full" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <div className="flex justify-center items-center max-w-[1220px] w-full p-10" >
                    <label className="md:text-4xl font-manropeBold text-white">KYSAW - Giải mã Gen vẹn toàn sức khỏe</label>
                </div>
            </div>
            <div className="flex justify-center items-center max-w-[1000px] w-full p-5">
                {RecruitmentData.map((e) => {
                    return (
                        <div key={e.id} className="w-full rounded-box shadow-md hover:shadow-lg flex flex-col p-5">
                            <div className="border-b-2 pb-2  pt-2 flex justify-between items-center">
                                <Link href={`/recruitment/${e.id}`} className="text-xl font-manropeBold ">{e && e.name}</Link>
                                <div className="p-2 pl-2 pr-2 rounded-full text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>{e && e.time}</div>
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
        </div>
    )
}