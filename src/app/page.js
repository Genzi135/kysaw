'use client'
import Image from "next/image";
import GeneBenefit1 from '../../assets/Slider/Hieu ro co the.png';
import GeneBenefit2 from '../../assets/Slider/Phong ngua rui ro.png';
import GeneBenefit3 from '../../assets/Slider/Toi uu suc khoe.png';
import GenePremium from '../../assets/Products/Gencare Premium.jpg';
import YamuGene from '../../assets/Products/Yamugene.jpg';
import GeneBenefitCard from "@/components/GeneBenefitCard";
import LogoBackgroundImage from '../../assets/Logo/KYSAW_LOGO_FINAL_WHITE_COLOR.png';
import JH from '../../assets/Partners/JH.jpg';
import GS from '../../assets/Partners/GS.png';
import { COLOR } from "@/utils/COLORS";
import ProductCard from "@/components/ProductCard";
import nuocbot from '../../assets/reason/nuocbot.jpg';
import congnghe from '../../assets/reason/congnghe.jpg';
import tuvan from '../../assets/reason/tuvan.jpg';
import HomepageBanner from '../../assets/Slider/HomepageBanner.png';
import ProductSlider from "@/components/ProductSlider";

export default function Home() {

  const geneBenefit = [
    {
      path: GeneBenefit1,
      label: 'HieuRoCoThe',
      title: 'Hiểu rõ cơ thể',
      content: 'Xét nghiệm DNA giúp bạn hiểu rõ hơn về cơ thể và gen di truyền của mình. Thông tin từ xét nghiệm có thể tiết lộ về đặc điểm sinh học, tình trạng sức khỏe, và tiềm năng di truyền, giúp bạn có cái nhìn toàn diện về bản thân.'
    },
    {
      path: GeneBenefit2,
      label: 'PhongNguaRuiRo',
      title: 'Phòng ngừa rủi ro',
      content: 'Xét nghiệm DNA giúp phát hiện các yếu tố rủi ro di truyền, từ đó bạn có thể chuẩn bị và thực hiện các biện pháp phòng ngừa kịp thời nhằm giảm thiểu nguy cơ mắc các bệnh di truyền và bảo vệ sức khỏe của bản thân bạn và gia đình.'
    },
    {
      path: GeneBenefit3,
      label: 'ToiUuSucKhoe',
      title: 'Tối ưu sức khỏe',
      content: 'Dựa trên kết quả xét nghiệm DNA, bạn có thể điều chỉnh chế độ ăn uống, tập luyện và lối sống sao cho phù hợp với cấu trúc gen của mình. Điều này giúp tối ưu hóa sức khỏe và tăng cường chất lượng cuộc sống hàng ngày.'
    },
  ];


  return (
    <main className="mt-[70px]">
      <div
        className="flex justify-center items-center"
        style={{ backgroundImage: `linear-gradient(to top, ${COLOR.backgroundPrimary},${COLOR.backgroundSecondary})` }}
      >
        <Image src={HomepageBanner} alt="banner" width={'auto'} height={'auto'} layout="responsive" className="max-w-[1220px]" />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center p-5 bg-white max-w-[1220px] w-full">
          <label className="text-black text-xl md:text-3xl font-manropeBold mt-5">Lợi ích của việc giải mã gen</label>
          <div className="w-full overflow-hidden flex justify-start md:justify-center items-center">
            <div className="flex md:pl-5 md:pr-5 overflow-x-auto scrollbar-hide w-full md:w-auto ">
              <div className="flex flex-nowrap gap-5 md:gap-10 pb-5 p-5">
                {geneBenefit.map((e, index) => (
                  <GeneBenefitCard key={index} props={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 bg-blue-50">
        <ProductSlider />
      </div>

      <div className="flex flex-col justify-center items-center p-2 md:p-5 gap-5 " >
        <lable className="text-black text-xl md:text-3xl font-manropeBold p-8">Tại sao nên chọn KYSAW</lable>
        <div className="flex flex-col justify-center items-center pl-10 pb-10 pr-10 max-w-[1220px] gap-10 xl:gap-10">
          <div className="flex flex-col sm:flex-row justify-start items-center sm:gap-5 bg-blue-50 rounded-xl shadow-md">
            <Image
              src={nuocbot}
              alt="reason1"
              className="rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl w-[100%] sm:w-[55%]"
            />
            <div className="text-base lg:p-5 lg:text-lg p-2 flex flex-col gap-2 w-full sm:w-[44%]">
              <label className="font-manropeBold">
                <div className="flex justify-center sm:justify-start items-center">Lấy mẫu bằng nước bọt</div>
              </label>
              <label className="flex justify-center items-center">
                Phương pháp an toàn, không đau và dễ thực hiện, cho phép khách hàng tự lấy mẫu tại nhà một cách tiện lợi.
              </label>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse justify-start items-center sm:gap-5 bg-blue-50 rounded-xl shadow-md mt-5">
            <Image
              src={congnghe}
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
          </div>
          <div className="flex flex-col sm:flex-row justify-start items-center sm:gap-5 bg-blue-50 rounded-xl shadow-md mt-5">
            <Image
              src={tuvan}
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
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-10 pb-10" style={{ backgroundColor: COLOR.backgroundPrimary }}>
        <div className="flex justify-center items-center p-5 md:p-10 gap-5 lg:flex-nowrap flex-wrap rounded-xl max-w-[1220px]">
          <div className="text-white" >
            <p className="text-lg text-balance">
              <label className="font-manropeBold">KYSAW</label> là đơn vị tiên phong đem lại  giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong  quá trình điều trị y tế.
            </p>
          </div>
          <Image src={LogoBackgroundImage} alt="kysaw" width={485} height={485} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-5">
        <label className="text-black text-xl md:text-3xl font-manropeBold mt-5">Đối tác của chúng tôi</label>
        <div className="flex justify-center items-center gap-5 md:gap-10">
          <div className="flex justify-center items-center bg-white">
            <Image src={JH} alt="logo" width={200} height={200} />
          </div>
          <div className="flex justify-center items-center bg-white">
            <Image src={GS} alt="logo" width={260} height={260} />
          </div>
        </div>
      </div>

      {/* <PartnerSlider /> */}
    </main>
  );
}
