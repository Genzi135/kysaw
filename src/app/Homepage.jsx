'use client'
import Image from "next/image";
import { COLOR } from "../utils/COLORS";
import ProductCard from "../components/ProductCard";
import ProductData from "./(pages)/product/[id]/data";
import '../app/globals.css';
import { useState, useEffect } from "react";
import GeneBenefitSlider from "../components/GeneBenefitSlider";
import { motion } from "framer-motion";
import { imgShared } from "../utils/images";
import HomeMainBanner from "../components/HomeMainBanner";
import HomeSubBanner from "../components/HomeSubBanner";

export default function HomePage() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <main className="mt-[70px] bg-white scroll-smooth">
            <div
                className="flex justify-center items-center"
                style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},${COLOR.backgroundSecondary})` }}
            >
                <Image src={imgShared.Banner.HomePageBanner} alt="banner" width={'auto'} height={'auto'} layout="responsive" className="max-w-[1220px]" />
            </div>

            <div className={animate ? 'slide-up' : 'invisible' + 'flex justify-center items-center '}>
                <GeneBenefitSlider />
            </div>
            <div className="w-full hidden lg:flex flex-col justify-center items-center" style={{ backgroundImage: `linear-gradient(to bottom, ${COLOR.backgroundPrimary}, ${COLOR.backgroundSecondary}, ${COLOR.backgroundPrimary})` }}>
                <label className="text-white text-2xl md:text-3xl font-manropeBold mt-14">Sản phẩm gen từ chúng tôi</label>
                <HomeMainBanner />
            </div>
            <div className="w-full flex lg:hidden flex-col justify-center items-center" style={{ backgroundImage: `linear-gradient(to bottom, ${COLOR.backgroundPrimary}, ${COLOR.backgroundSecondary}, ${COLOR.backgroundPrimary})` }}>
                <label className="text-white text-xl md:text-3xl font-manropeBold mt-14">Sản phẩm gen từ chúng tôi</label>
                <HomeSubBanner />
            </div>

            <div className="hidden flex-col justify-center items-center p-5 md:p-10 gap-10 bg-blue-50 ">
                <label className="text-black text-xl md:text-3xl font-manropeBold p-5">Thông tin về các sản phẩm</label>
                <div className="flex flex-col sm:flex-row justify-center items-center w-[90vw] md:max-w-[1220px] overflow-hidden">
                    <div className="flex overflow-hidden gap-10 group p-10 hover:overflow-x-scroll">
                        <div className="flex flex-shrink-0 justify-center items-center gap-10 flex-col sm:flex-row  animate-none sm:animate-loop-scroll group-hover:paused ">
                            {ProductData.map((e, index) => (
                                <ProductCard data={e} key={index} />
                            ))}
                        </div>
                        <div className="hidden sm:flex flex-shrink-0 space-x-10 animate-loop-scroll group-hover:paused">
                            {ProductData.map((e, index) => (
                                <ProductCard data={e} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a href="/product">
                        <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>Xem thêm sản phẩm   →</button>
                    </a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center p-2 md:p-5 gap-5 overflow-hidden">
                <label className="text-black text-xl md:text-3xl font-manropeBold p-2 mt-5 mb-5">Tại sao nên chọn KYSAW</label>
                <div className="flex flex-col justify-center items-center pl-10 pb-10 pr-10 max-w-[1220px] gap-2 xl:gap-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInLeft}
                        transition={{ duration: 1 }}
                        className="flex flex-col sm:flex-row justify-start items-center sm:gap-5 bg-blue-50 rounded-xl shadow-md"
                    >
                        <Image
                            src={imgShared.reason.NuocBot}
                            alt="reason1"
                            className="rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl w-[100%] sm:w-[55%]"
                        />
                        <div className="text-base lg:p-5 lg:text-lg p-2 flex flex-col gap-2 w-full sm:w-[44%]">
                            <label className="font-manropeBold">
                                <div className="flex justify-center sm:justify-start items-center">Sản phẩm tiên tiến, lấy mẫu bằng nước bọt</div>
                            </label>
                            <label className="flex justify-center items-center">
                                Phương pháp an toàn, không đau và dễ thực hiện, cho phép khách hàng tự lấy mẫu tại nhà một cách tiện lợi.
                            </label>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInRight}
                        transition={{ duration: 1 }}
                        className="flex flex-col sm:flex-row-reverse justify-start items-center sm:gap-5 bg-blue-50 rounded-xl shadow-md mt-5"
                    >
                        <Image
                            src={imgShared.reason.CongNghe}
                            alt="reason2"
                            className="rounded-t-xl sm:rounded-tl-none sm:rounded-r-xl w-[100%] sm:w-[55%]"
                        />
                        <div className="text-base lg:p-5 lg:text-lg p-2 flex flex-col gap-2 w-full sm:w-[44%]">
                            <label className="font-manropeBold">
                                <div className="flex justify-center sm:justify-start items-center">Công nghệ giải mã gen hiện đại,</div>
                                <div className="flex justify-center sm:justify-start items-center">độ chính xác cao</div>
                            </label>
                            <label className="flex justify-center items-center">
                                Sử dụng công nghệ tiên tiến nhất để đảm bảo kết quả phân tích gen có độ tin cậy cao và mang lại giá trị ý nghĩa cho người dùng.
                            </label>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInLeft}
                        transition={{ duration: 1 }}
                        className="flex flex-col sm:flex-row justify-start items-center sm:gap-5 bg-blue-50 rounded-xl shadow-md mt-5"
                    >
                        <Image
                            src={imgShared.reason.TuVan}
                            alt="reason3"
                            className="rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl w-[100%] sm:w-[55%]"
                        />
                        <div className="text-base lg:p-5 lg:text-lg p-2 flex flex-col gap-2 w-full sm:w-[44%]">
                            <label className="font-manropeBold">
                                <div className="flex justify-center sm:justify-start items-center">Đội ngũ hỗ trợ chuyên nghiệp,</div>
                                <div className="flex justify-center sm:justify-start items-center">đồng hành lâu dài</div>
                            </label>
                            <label className="flex justify-center items-center">
                                Chúng tôi tự hào về đội ngũ chuyên gia tận tâm, luôn sẵn sàng hỗ trợ và đồng hành cùng khách hàng trong suốt quá trình sử dụng dịch vụ.
                            </label>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="flex justify-center items-center pt-10 pb-10" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <div className="flex justify-center items-center p-5 md:p-10 gap-5 lg:flex-row flex-col-reverse rounded-xl max-w-[1220px]">
                    <div className="text-white" >
                        <p className="text-lg ">
                            <label className="font-manropeBold">KYSAW</label> là đơn vị tiên phong đem lại  giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong  quá trình điều trị y tế.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-5">
                <label className="text-black text-xl md:text-3xl font-manropeBold mt-5">Đối tác của chúng tôi</label>
                <div className="flex justify-center items-center gap-5 md:gap-10">
                    <div className="flex justify-center items-center bg-white ">
                        <Image src={imgShared.partners.JH} alt="logo" width={200} height={200} />
                    </div>
                    <div className="flex justify-center items-center bg-white">
                        <Image src={imgShared.partners.GS} alt="logo" width={200} height={200} />
                    </div>
                </div>
            </div>
        </main>
    );
}
