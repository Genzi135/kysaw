/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import KYSAW from '../../../../assets/Slider/kysaw.png';
import LogoKysaw from '../../../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png'
import JH from '../../../../assets/Partners/JH.jpg'
import GS from '../../../../assets/Partners/GS.png'
import { COLOR } from "@/utils/COLORS";
import TeamCard from "@/components/TeamCard";
import HomepageBanner from '../../../../assets/Slider/HomepageBanner.png';
import tamnhin from '../../../../assets/Slider/tamnhin.png';
import sumenh from '../../../../assets/Slider/sumenh.png';

export default function About() {
    const teamFounder = [
        {
            image: '',
            name: 'BÙI THỊ KIM ANH',
            position: 'GIÁM ĐỐC ĐIỀU HÀNH',
            major: 'Củ nhân kinh tế Master Business Coach',
            description: 'Hơn 10 năm giữ vài trò giám đốc chuyên môn tại các tập đoàn toàn cầu'
        }, {
            image: '',
            name: 'BÙI NGỌC ĐOAN CHIÊU',
            position: 'GIÁM ĐỐC CHUYÊN MÔN',
            major: 'Th.S. Công nghệ sinh học & Sinh tin học',
            description: 'Hơn 8 năm kinh nghiệm trong lĩnh vực xét nghiệm và chăm sóc sức khỏe chủ động'
        }, {
            image: '',
            name: 'BÙI QUANG ANH CHIÊU',
            position: 'CỐ VẤN Y KHOA',
            major: 'BS CKI Ngoại tổng quát',
            description: 'Hơn 10 năm trong lãnh vực điều trị các bệnh lý về tiêu hoá - gan mật tụy, ung thư tiêu hoá'
        },
    ]

    const teamOpen = [
        {
            image: '',
            name: 'CRMC',
            position: 'TƯ VẤN TẦM SOÁT & ĐÁNH GIÁ NGUY CƠ UNG THƯ',
            major: 'Đội ngũ bác sĩ chuyên khoa',
            description: 'Tư vấn kết quả giải mã gene tầm soát bệnh giai đoạn sớm và theo dõi sức khỏe định kỳ'
        }, {
            image: '',
            name: 'DKF',
            position: 'HUẤN LUYỆN VIÊN DINH DƯỠNG',
            major: 'Chứng nhận quốc tế từ Precision Nutrition',
            description: 'Thiết kế giải pháp dinh dưỡng phòng bệnh cá nhân hóa'
        }, {
            image: '',
            name: 'ZOEL',
            position: 'HUẤN LUYỆN VIÊN TINH THẦN',
            major: 'Reiki, Chuông xoay, Thiền, Yoga',
            description: 'Thiết kế liệu trình giúp cân bằng tâm lý trong các trường hợp căng thẳng lo âu quá mứcá'
        },
    ]

    return (
        <div className="mt-[70px]">
            <div
                className="flex justify-center items-center"
                style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},#15BEF2)` }}
            >
                <Image src={HomepageBanner} alt="banner" width={'auto'} height={'auto'} layout="responsive" className="max-w-[1220px]" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center pl-5 pr-5 pb-5 md:pl-10 md:pr-10 max-w-[1220px]">
                    <label className="font-manropeBold text-2xl md:text-4xl p-14">
                        Giới thiệu
                    </label>
                    <div className="flex justify-center items-center p-5 md:p-10 gap-5 lg:flex-nowrap flex-wrap rounded-xl border-2">
                        <div className="" style={{ color: COLOR.backgroundPrimary }}>
                            <p className="text-lg text-balance">
                                <label className="font-manropeBold">KYSAW</label> là đơn vị tiên phong đem lại  giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong  quá trình điều trị y tế.
                            </p>
                        </div>
                        <Image src={LogoKysaw} alt="kysaw" width={485} height={485} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center p-5 md:pl-10 md:pr-10 max-w-[1220px]">
                    <label className="font-manropeBold text-2xl md:text-4xl pb-5 mt-5">Tầm nhìn & sứ mệnh</label>
                    <div className="flex flex-col justify-center items-center gap-10 lg:gap-0">
                        <div className="flex justify-center items-center flex-col md:flex-row">
                            <div className="w-[70%] flex flex-col justify-center items-center">
                                <Image src={tamnhin} alt="tamnhin" width={'100%'} height={'100%'} />
                            </div>
                            <div className="flex flex-col justify-center items-center relative">
                                <label className="font-manropeBold text-xl text-white md:text-xl absolute top-[-20px] rounded-full pl-6 pr-6 pt-1 pb-1" style={{ backgroundColor: COLOR.backgroundPrimary }}>Tầm nhìn</label>
                                <div className="w-[100%] border-2 rounded-lg p-10">KYSAW tiên phong đi sâu vào cộng đồng, lan tỏa giá trị thông tin di truyền, từ đó giúp
                                    định hướng sàng lọc nhằm chẩn đoán sớm bệnh ung thư và các bệnh lý mãn tính nguy
                                    hiểm khác, đem lại cơ hội điều trị thành công và cải thiện chất lượng cuộc sống cho
                                    người Việt.</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center flex-col-reverse md:flex-row">
                            <div className="flex flex-col justify-center items-center relative">
                                <div className="w-[100%] border-2 rounded-lg p-10">
                                    Giúp người Việt chăm sóc sức khỏe hiệu quả hơn qua việc kết nối khoa học công nghệ gene với các giải pháp chủ động khác.
                                    <br></br>
                                    Nỗ lực giáo dục cộng đồng và kết hợp với các đơn vị y khoa nhằm nâng cao tỷ lệ chẩn đoán ung thư giai đoạn sớm, từ tiền ung thư đến giai đoạn 1, nhờ bản  đồ giải mã đột biến gene định hướng tầm soát sâu và trúng đích, từ đó bảo vệ khách hàng sống khỏe dài lâu.
                                </div>
                                <label className="font-manropeBold text-xl text-white md:text-xl absolute top-[-20px] rounded-full pl-6 pr-6 pt-1 pb-1" style={{ backgroundColor: COLOR.backgroundPrimary }}>Sứ mệnh</label>
                            </div>
                            <div className="w-[70%] flex flex-col justify-center items-center">
                                <Image src={sumenh} alt="tamnhin" width={'100%'} height={'100%'} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-5 md:gap-10 p-5 mt-10 rounded-lg flex-wrap lg:flex-nowrap bg-blue-50 text-center   " >
                        <div className="flex justify-center items-center gap-5 md:gap-10 flex-col sm:flex-row">
                            <label className="font-manropeBold text-lg ">
                                Đặt sức khỏe người Việt làm trọng tâm
                            </label>
                            <label className="font-manropeBold text-lg">
                                Sản phẩm phải tốt nhất
                            </label>
                        </div>
                        <div className="flex justify-center items-center gap-5 md:gap-10 flex-col sm:flex-row">
                            <label className="font-manropeBold text-lg">
                                Trung thực và đạo đức
                            </label>
                            <label className="font-manropeBold text-lg">
                                Giá trị và toàn diện
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 mt-10" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <label className="text-white text-xl md:text-3xl font-manropeBold mt-5">Đội ngũ của chúng tôi</label>
                <label className="text-white text-lg md:text-2xl font-manropeBold">Founder & co-founders</label>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {teamFounder.map((e, index) => {
                        return (
                            <TeamCard props={e} key={index} />
                        )
                    })}
                </div>
                <label className="text-white text-lg md:text-2xl font-manropeBold">Hệ sinh thái mở rộng</label>
                <div className="flex flex-wrap justify-center items-center gap-10 mb-5">
                    {teamOpen.map((e, index) => {
                        return (
                            <TeamCard props={e} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-5">
                <label className="text-black text-xl md:text-3xl font-manropeBold mt-5">Đối tác của chúng tôi</label>
                <div className="flex justify-center items-center gap-5 md:gap-10">
                    <div className="flex justify-center items-center bg-white">
                        <Image src={JH} alt="logo" width={200} height={200} />
                    </div>
                    <div className="flex justify-center items-center bg-white">
                        <Image src={GS} alt="logo" width={200} height={200} />
                    </div>
                </div>
            </div>
        </div>
    )
}