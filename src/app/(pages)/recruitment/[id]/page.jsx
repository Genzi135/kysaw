'use client'
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RecruitmentData } from "./data";
import { COLOR } from "@/utils/COLORS";
import Link from "next/link";

export default function JobDetail() {
    const [data, setData] = useState(null);
    const pathName = usePathname();

    useEffect(() => {
        const splitString = pathName.split('/');
        const getId = splitString[splitString.length - 1];
        const getData = RecruitmentData.find((e) => e.id === getId);
        console.log(getData);
        setData(getData);
    }, [pathName]);
    if (!data) {
        return (
            <div className='flex flex-1 justify-center items-center mt-[200px] mb-[200px]'>
                <label className='text-4xl'>Loading...</label>
            </div>
        )
    }
    return (
        <div className="mt-[72px] scroll-smooth flex flex-col justify-center items-center">
            <div className="w-full max-w-[800px] flex justify-start items-center p-2">
                <Link href={'/recruitment'} className="hover:underline">← Trở về</Link>
            </div>
            <div className="flex flex-col justify-center items-center w-full" style={{ backgroundColor: COLOR.backgroundPrimary }}>

                <div className="flex justify-center items-center max-w-[1220px] w-full p-10" >
                    <label className="md:text-4xl text-2xl font-manropeBold text-white">{data && data.name}</label>
                </div>
            </div>
            <div className="flex flex-col justify-center items-start max-w-[600px] w-full p-5">
                <label className="text-xl font-manropeBold">Mô tả công việc:</label>
                <ul className="list-disc ml-6 p-2">
                    {data && data.jobDescription.map((e, index) => {
                        return (
                            <li key={index} className="">
                                {e}
                            </li>
                        )
                    })}
                </ul>
                <label className="text-xl font-manropeBold">Yêu cầu của công việc:</label>
                <ul className="list-disc ml-6 p-2">
                    {data && data.jobRequirement.map((e, index) => {
                        return (
                            <li key={index} className="">
                                {e}
                            </li>
                        )
                    })}
                </ul>
                <label className="text-xl font-manropeBold">Quyền lợi:</label>
                <ul className="list-disc ml-6 p-2">
                    {data && data.benefit.map((e, index) => {
                        return (
                            <li key={index} className="">
                                {e}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="w-full max-w-[1220px] flex flex-col justify-center items-center p-5 text-xl">
                <label>
                    Để ứng tuyển vui lòng gửi mail về địa chỉ: <label className="font-manropeBold">info@kysaw.vn</label>
                </label>
            </div>
            <div className="w-full max-w-[1220px] flex flex-col justify-center items-center p-5 text-xl">
                Cảm ơn bạn đã xem
            </div>

        </div>
    )
}