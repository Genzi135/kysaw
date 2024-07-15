'use client'

import { COLOR } from "../../../utils/COLORS";
import { imgShared } from "../../../utils/images";
import Image from "next/image";
import { useState } from "react";
import { consultants } from "./data";

export default function Consultants() {
    const [data, setData] = useState(consultants);
    const [selectedLocation, setSelectedLocation] = useState("");

    const uniqueLocations = [...new Set(consultants.map(consultant => consultant.location))];

    const handleLocationChange = (event) => {
        const location = event.target.value;
        setSelectedLocation(location);
        setData(location ? consultants.filter(consultant => consultant.location === location) : consultants);
    };

    return (
        <div className="mt-16 scroll-smooth flex flex-col justify-center items-center">
            <div className="w-full h-auto flex justify-center items-center" style={{ backgroundColor: COLOR.bannerRecruitment }}>
                <div className="flex max-w-[1220px] w-full h-full justify-center items-center max-h-[500px] " >
                    <Image src={imgShared.Banner.Consultants} alt="banner" className="w-full h-full" layout="responsive" />
                </div>
            </div>
            <div className="flex justify-center items-center max-w-[1220px] w-full"  >
                <label className="md:text-4xl text-2xl font-manropeBold text-white rounded-xl p-5 mt-10" style={{ backgroundColor: COLOR.backgroundPrimary }}>KYSAW - Tư vấn viên</label>
            </div>
            <div className="flex justify-center items-center max-w-[1220px] w-full mt-10" >
                <div className="flex justify-center items-center gap-2">
                    <label className="text-lg sm:text-xl">Địa điểm:</label>
                    <select value={selectedLocation} onChange={handleLocationChange} className="select select-bordered text-base ">
                        <option value="">-Chọn tỉnh/thành phố-</option>
                        {uniqueLocations.map((location, index) => {
                            return (
                                <option key={index} value={location} className="sm:text-base text-sm">{location}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full max-w-[1220px]  p-10">
                {data.map((e, index) => {
                    return (
                        <div key={index} className="w-full max-w-[800px] rounded overflow-hidden shadow-lg m-4 p-5 hover:shadow-gray-400 ">
                            <div className="pb-2 mb-2 border-b-2 space-y-1">
                                <div className="font-manropeBold text-xl">{e.name}</div>
                                <div className="text-base">[{e.location}]</div>
                                <div>Ngày cấp chứng nhận: {e.certificationDate}</div>
                            </div>
                            <div className="flex justify-start items-center flex-wrap sm:gap-10">
                                <div><label className="font-manropeBold">Số điện thoại:</label>{e.phone} </div>
                                <div><label className="font-manropeBold">Email:</label> {e.email}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
