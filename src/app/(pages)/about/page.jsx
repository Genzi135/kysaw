import Image from "next/image";
import LogoKysaw from '../../../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png'
import { COLOR } from "@/utils/COLORS";
import TeamCard from "@/components/TeamCard";
import HomepageBanner from '../../../../assets/Slider/HomepageBanner.png';

export const metadata = {
    title: 'Giới thiệu - Kysaw',
    description: 'Kysaw là đơn vị tiên phong đem lại giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong quá trình điều trị y tế.',
    keywords: 'Kysaw, công nghệ gene, chăm sóc sức khỏe, tài chính gia đình, đào tạo dinh dưỡng, giải pháp sức khỏe, tầm soát sức khỏe, điều trị y tế',
    author: 'Kysaw Team',
    robots: 'index, follow',
    ogTitle: 'Giới thiệu - Kysaw',
    ogDescription: 'Kysaw là đơn vị tiên phong trong việc ứng dụng công nghệ gene vào đời sống, cung cấp các giải pháp chăm sóc sức khỏe toàn diện và bảo vệ tài chính gia đình.',
    ogImage: LogoKysaw.src,
    ogUrl: 'https://kysaw.com/about',
};

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
    ];

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
            description: 'Thiết kế liệu trình giúp cân bằng tâm lý trong các trường hợp căng thẳng lo âu quá mức'
        },
    ];

    return (
        <div className="mt-[70px]">
            <div className="flex justify-center items-center" style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},#15BEF2)` }}>
                <Image src={HomepageBanner} alt="banner" layout="responsive" className="max-w-[1220px]" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center pl-5 pr-5 pb-5 md:pl-10 md:pr-10 max-w-[1220px]">
                    <label className="font-manropeBold text-2xl md:text-4xl p-14">Giới thiệu</label>
                    <div className="flex justify-center items-center p-5 md:p-10 gap-5 lg:flex-nowrap flex-wrap rounded-xl border-2">
                        <div style={{ color: COLOR.backgroundPrimary }}>
                            <p className="text-lg text-balance">
                                <label className="font-manropeBold">KYSAW</label> là đơn vị tiên phong đem lại giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong quá trình điều trị y tế.
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
                                <img src='https://res.cloudinary.com/diribdgsz/image/upload/v1720149610/kysaw/benefit/Duke_Illustration_for_KYSAW-41_izswn0.png' alt="tamnhin" layout="responsive" width={'100%'} height={'100%'} />
                            </div>
                            <div className="flex flex-col justify-center items-center relative">
                                <label className="font-manropeBold text-xl text-white md:text-xl absolute top-[-20px] rounded-full pl-6 pr-6 pt-1 pb-1" style={{ backgroundColor: COLOR.backgroundPrimary }}>Tầm nhìn</label>
                                <div className="w-[100%] border-2 rounded-lg p-10">
                                    KYSAW tiên phong đi sâu vào cộng đồng, lan tỏa giá trị thông tin di truyền, từ đó giúp định hướng sàng lọc nhằm chẩn đoán sớm bệnh ung thư và các bệnh lý mãn tính nguy hiểm khác, đem lại cơ hội điều trị thành công và cải thiện chất lượng cuộc sống cho người Việt.
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center items-center flex-col-reverse md:flex-row">
                            <div className="flex flex-col justify-center items-center relative">
                                <div className="w-[100%] border-2 rounded-lg p-10">
                                    Giúp người Việt chăm sóc sức khỏe hiệu quả hơn qua việc kết nối khoa học công nghệ gene với các giải pháp chủ động khác.
                                    <br />
                                    Nỗ lực giáo dục cộng đồng và kết hợp với các đơn vị y khoa nhằm nâng cao tỷ lệ chẩn đoán ung thư giai đoạn sớm, từ tiền ung thư đến giai đoạn 1, nhờ bản đồ giải mã đột biến gene định hướng tầm soát sâu và trúng đích, từ đó bảo vệ khách hàng sống khỏe dài lâu.
                                </div>
                                <label className="font-manropeBold text-xl text-white md:text-xl absolute top-[-20px] rounded-full pl-6 pr-6 pt-1 pb-1" style={{ backgroundColor: COLOR.backgroundPrimary }}>Sứ mệnh</label>
                            </div>
                            <div className="w-[70%] flex flex-col justify-center items-center">
                                <img src='https://res.cloudinary.com/diribdgsz/image/upload/v1720149613/kysaw/benefit/Duke_Illustration_for_KYSAW-42_g613r4.png' alt="sumenh" layout="responsive" width={'100%'} height={'100%'} />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5 md:gap-10 p-5 mt-10 rounded-lg flex-wrap lg:flex-nowrap bg-blue-50 text-center mb-5">
                            <div className="flex justify-center items-center gap-5 md:gap-10 flex-col sm:flex-row">
                                <label className="font-manropeBold text-lg">Đặt sức khỏe người Việt làm trọng tâm</label>
                                <label className="font-manropeBold text-lg">Sản phẩm phải tốt nhất</label>
                            </div>
                            <div className="flex justify-center items-center gap-5 md:gap-10 flex-col sm:flex-row">
                                <label className="font-manropeBold text-lg">Trung thực và đạo đức</label>
                                <label className="font-manropeBold text-lg">Giá trị và toàn diện</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10" style={{ backgroundColor: COLOR.backgroundPrimary }}>
                <label className="text-white text-xl md:text-3xl font-manropeBold">Đội ngũ của chúng tôi</label>
                <label className="text-white text-lg md:text-2xl font-manropeBold">Founder & co-founders</label>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {teamFounder.map((e, index) => (
                        <TeamCard props={e} key={index} />
                    ))}
                </div>
                <label className="text-white text-lg md:text-2xl font-manropeBold">Hệ sinh thái mở rộng</label>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {teamOpen.map((e, index) => (
                        <TeamCard props={e} key={index} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-5 mt-[60px]">
                <div className="flex flex-col justify-center items-center relative p-10 border-2 max-w-[1220px] rounded-lg gap-8">
                    <div className="flex justify-center items-center absolute pl-5 pr-5 pt-2 pb-2 text-nowrap top-[-45px] sm:top-[-65px] border-2 rounded-full bg-white text-xl font-manropeBold sm:w-[450px] sm:h-[125px] h-[90px] w-[250px]">
                        <img src="https://res.cloudinary.com/diribdgsz/image/upload/v1718963130/kysaw/partners/JHBioHolding_Logo-02_hdewen.png" alt="jh bioholding" className="sm:h-[90px] w-[auto] h-[60px]" />
                    </div>
                    <p className="mt-[52px] text-xl">
                        JH Bioholdings là Bệnh viện - Viện nghiên cứu Trung tâm xét nghiệm hàng đầu và là đối tác của hơn 400 bệnh viện tại Hàn Quốc. 2023 là bước ngoặt lớn của sản phẩm xét nghiệm gen di truyền tầm soát ung thư Yamugene trên thị trường Việt Nam.
                    </p>
                    <p className="text-xl">
                        Với phương châm hoạt động cống hiến hết mình để phát triển các sản phẩm và hệ thống chẩn đoán phân tử khác nhau thông qua việc đầu tư vào R&D nhằm đóng góp vào cuộc sống khỏe mạnh của nhân loại.
                    </p>
                    <p className="text-xl">
                        Được sự gửi gắm chính phủ Hàn Quốc, JH là doanh nghiệp hàng đầu về mảng xét nghiệm tại Hàn và được bảo trợ của chính phủ Hàn Quốc đến với Việt Nam.
                    </p>
                    <img src="https://res.cloudinary.com/diribdgsz/image/upload/v1718963131/kysaw/partners/YamuGene_Certificate-14_zw2qrd.png" alt="jg certificate" className="w-auto h-auto" />
                    <p className="text-xl">
                        JH Bioholdings là đơn vị được cấp phép sản xuất, kinh doanh, nghiên cứu di truyền, và có đầy đủ chứng nhận quản lý chất lượng ISO, CE, GMP.
                    </p>
                    <p className="text-xl text-start">
                        KYSAW hân hạnh được lựa chọn là đối tác môi giới độc quyền sản phẩm Yamugene của JH Bioholdings.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center relative p-10 border-2 max-w-[1220px] rounded-lg gap-8 mt-[80px]">
                    <div className="flex justify-center items-center absolute pl-5 pr-5 pt-2 pb-2 text-nowrap top-[-45px] sm:top-[-65px] border-2 rounded-full bg-white text-xl font-manropeBold sm:w-[450px] sm:h-[125px] h-[90px] w-[250px]">
                        <img src="https://res.cloudinary.com/diribdgsz/image/upload/v1718963129/kysaw/partners/GenSolution_Logo-02_gewouq.png" alt="gs" className="sm:h-[90px] w-[auto] h-[60px]" />
                    </div>
                    <p className="mt-[52px] text-xl">
                        Gene Solutions thành lập với tầm nhìn trở thành tổ chức hàng đầu tại Việt Nam và khu vực trong lĩnh vực nghiên cứu phát triển, ứng dụng công nghệ phân tích di truyền và giải mã gene vào nền y học chính xác. Sứ mệnh của Gene Solutions là giúp cải thiện sức khỏe cộng đồng bằng giải pháp gene tiên tiến, chất lượng và đảm bảo chi phí hợp lý nhất. Hiện nay Gene Solutions đã vươn xa trong khu vực, có mặt tại 4 quốc gia gồm: Singapore, Indonesia, Thailand, Philippines.
                    </p>
                    <div className="w-full text-xl">Năng lực mạnh mẽ và uy tín</div>
                    <div className="w-full text-xl">
                        <ul className="list-disc ml-10">
                            <li>15 Tiến sĩ trong lĩnh vực Genetics, Cancer biology, Bioinformatics, ComputerScience...</li>
                            <li>15 công bố quốc tế</li>
                            <li>2 phòng LAB chuẩn ISO15189, hệ thống giải mã gene NGS tân tiến</li>
                            <li>14 bác sĩ tư vấn</li>
                            <li>Bảo mật dữ liệu tiêu chuẩn HIPAA</li>
                        </ul>
                    </div>
                    <img src="https://res.cloudinary.com/diribdgsz/image/upload/v1718963131/kysaw/partners/GenSolution_-_He_Sinh_Thai-13_lf9elt.png" alt="gs" className="w-auto h-auto" />
                </div>
            </div>
        </div>
    );
}
