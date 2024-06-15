import Image from "next/image";
import KYSAW from '../../../../assets/Slider/kysaw.png';
import JH from '../../../../assets/Partners/JH.jpg'
import GS from '../../../../assets/Partners/GS.png'
import { COLOR } from "@/utils/COLORS";
import TeamCard from "@/components/TeamCard";

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
            name: 'IPHA',
            position: 'HUẤN LUYỆN VIÊN TINH THẦN',
            major: 'Reiki, Chuông xoay, Thiền, Yoga',
            description: 'Thiết kế liệu trình giúp cân bằng tâm lý trong các trường hợp căng thẳng lo âu quá mứcá'
        },
    ]

    return (
        <div className="mt-20">
            <div className="flex justify-center items-center p-40 bg-gray-100">
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10">
                <label className="font-semibold text-2xl md:text-4xl pb-5">
                    Giới thiệu
                </label>
                <div className="flex justify-center items-center p-5 md:p-10 gap-5 lg:flex-nowrap flex-wrap" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                    <div className="text-white">
                        <p className="text-lg">
                            <label className="font-semibold">KYSAW</label> là đơn vị tiên phong đem lại  giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong  quá trình điều trị y tế.
                        </p>
                    </div>
                    <Image src={KYSAW} alt="kysaw" width={500} height={500} />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10">
                <label className="font-semibold text-2xl md:text-4xl pb-5">Tầm nhìn & sứ mệnh</label>
                <div className="flex flex-col justify-center items-center md:gap-10 gap-5">
                    <div className="flex justify-center items-start flex-col md:flex-row">
                        <div className="md:w-[20%] flex justify-center items-center w-[100%]">
                            <label className="font-semibold text-xl text-teal-500 md:text-2xl">Tầm nhìn</label>
                        </div>
                        <div className="md:w-[60%] w-[100%] border-2 border-teal-500 p-5 rounded-lg">KYSAW tiên phong đi sâu vào cộng đồng, lan tỏa giá trị thông tin di truyền, từ đó giúp
                            định hướng sàng lọc nhằm chẩn đoán sớm bệnh ung thư và các bệnh lý mãn tính nguy
                            hiểm khác, đem lại cơ hội điều trị thành công và cải thiện chất lượng cuộc sống cho
                            người Việt.</div>
                    </div>
                    <div className="flex justify-center items-start flex-col-reverse md:flex-row">
                        <div className="md:w-[60%] w-[100%] border-2 border-teal-500 p-5 rounded-lg">
                            Giúp người Việt chăm sóc sức khỏe hiệu quả hơn qua việc kết nối khoa học công nghệ gene với các giải pháp chủ động khác.
                            <br></br>
                            Nỗ lực giáo dục cộng đồng và kết hợp với các đơn vị y khoa nhằm nâng cao tỷ lệ chẩn đoán ung thư giai đoạn sớm, từ tiền ung thư đến giai đoạn 1, nhờ bản  đồ giải mã đột biến gene định hướng tầm soát sâu và trúng đích, từ đó bảo vệ khách hàng sống khỏe dài lâu.
                        </div>
                        <div className="md:w-[20%] flex justify-center items-center w-[100%]">
                            <label className="font-semibold text-xl text-teal-500 md:text-2xl">Sứ mệnh</label>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5 md:gap-10 p-5 mt-10 rounded-lg flex-wrap lg  :flex-nowrap" style={{ backgroundColor: COLOR.backgroundPrimary10 }}>
                    <div className="flex justify-center items-center gap-5 md:gap-10 flex-col sm:flex-row">
                        <label className="font-medium text-lg text-teal-600">
                            Đặt sức khỏe người Việt làm trọng tâm
                        </label>
                        <label className="font-medium text-lg text-teal-600">
                            Sản phẩm phải tốt nhất
                        </label>
                    </div>
                    <div className="flex justify-center items-center gap-5 md:gap-10 flex-col sm:flex-row">
                        <label className="font-medium text-lg text-teal-600">
                            Trung thực và đạo đức
                        </label>
                        <label className="font-medium text-lg text-teal-600">
                            Giá trị và toàn diện
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <label className="text-white text-xl md:text-3xl font-semibold">Đội ngũ của chúng tôi</label>
                <label className="text-white text-lg md:text-2xl font-semibold">Founder & co-founders</label>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {teamFounder.map((e, index) => {
                        return (
                            <TeamCard props={e} key={index} />
                        )
                    })}
                </div>
                <label className="text-white text-lg md:text-2xl font-semibold">Hệ sinh thái mở rộng</label>
                <div className="flex flex-wrap justify-center items-center gap-10 ">
                    {teamOpen.map((e, index) => {
                        return (
                            <TeamCard props={e} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-5">
                <label className="text-black text-xl md:text-3xl font-semibold">Đối tác của chúng tôi</label>
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