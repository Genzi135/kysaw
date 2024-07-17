'use client'

import { COLOR } from "../../../utils/COLORS";
import { imgShared } from "../../../utils/images";
import Image from "next/image";
import { useState } from "react";
import { consultants } from "./data";

export default function Consultants() {
    const [data, setData] = useState(consultants);
    const [selectedLocation, setSelectedLocation] = useState("");

    const uniqueLocations = [...new Set(consultants.map(consultant => consultant.region))];

    const handleLocationChange = (event) => {
        const location = event.target.value;
        setSelectedLocation(location);
        setData(location ? consultants.filter(consultant => consultant.region === location) : consultants);
    };

    return (
        <div className="mt-16 scroll-smooth flex flex-col justify-center items-center">
            <div className="w-full h-auto flex justify-center items-center" style={{ backgroundColor: COLOR.bannerRecruitment }}>
                <div className="flex max-w-[1220px] w-full h-full justify-center items-center max-h-[500px] " >
                    <Image src={imgShared.Banner.Consultants} alt="banner" className="w-full h-full" layout="responsive" />
                </div>
            </div>
            <div className="flex justify-center items-center max-w-[1050px] w-full flex-col md:flex-row mt-5 md:mt-10"  >
                <div className="flex justify-center items-center md:w-[49%]">
                    <Image src={imgShared.reason.AgentHoldingCertificate} alt="agent" className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-2 p-5 md:p-0 md:w-[49%]">
                    <label className="text-4xl font-manropeBold mb-6">Đội ngũ tư vấn</label>
                    <p className="text-left text-base md:text-lg">
                        Chúng tôi tự hào giới thiệu đội ngũ tư vấn chuyên nghiệp của KYSAW. Mỗi đại lý đều đã trải qua quá trình đào tạo chuyên sâu và vượt qua các bài kiểm tra nghiêm ngặt để đảm bảo họ đáp ứng mọi tiêu chuẩn cao nhất về năng lực và chuyên môn. Điều này đảm bảo rằng các đại lý của chúng tôi luôn cung cấp thông tin chính xác và đáng tin cậy cho khách hàng.
                    </p>
                    <p className="text-clip md:text-lg text-base">
                        Bất kể bạn có câu hỏi hay cần hỗ trợ, đội ngũ đại lý của chúng tôi luôn sẵn sàng đồng hành và hỗ trợ bạn một cách tận tâm. Với cam kết mang đến dịch vụ tốt nhất, chúng tôi tin rằng bạn sẽ hoàn toàn hài lòng với sự tư vấn và hỗ trợ từ các tư vấn viên hàng đầu của chúng tôi.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center max-w-[1220px] w-full md:mt-10" >
                <div className="sm:text-lg text-base mb-2 p-5">Để tìm tư vấn viên gần nhất, xin vui lòng chọn khu vực của bạn</div>
                <div className="flex justify-center items-center gap-2">
                    <label className="text-lg sm:text-lg">Khu vực:</label>
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
                                <div>Khu vực: {e.region}</div>
                                <div>Mã số tư vấn: {e.id}</div>
                                <div>Ngày cấp chứng nhận: {e.issuedDate}</div>
                                <div
                                    onClick={() => { window.open(e.certificateLink, '_blank') }}
                                    style={{ color: COLOR.backgroundPrimary }}
                                    className="cursor-pointer hover:underline"
                                >
                                    Xem chứng nhận
                                </div>
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
