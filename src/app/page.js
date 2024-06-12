'use client'
import Slider from "@/components/Slider";
import Image from "next/image";
import GeneBenefit1 from '../../assets/Slider/Hieu ro co the.png';
import GeneBenefit2 from '../../assets/Slider/Phong ngua rui ro.png';
import GeneBenefit3 from '../../assets/Slider/Toi uu suc khoe.png';
import GeneBenefitCard from "@/components/GeneBenefitCard";
import Kysaw from '../../assets/Slider/kysaw.png';
import Link from "next/link";

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
    <main className="">
      <Slider />
      <div className="w-full h-auto flex flex-col justify-center items-center gap-10 mt-10 mb-10">
        <label className="text-2xl font-semibold">Lợi ích của việc giải mã gen</label>
        <div className="w-full left-1/2 right-1/2 overflow-x-auto">
          <div className="flex items-center gap-10 px-5 py-10 md:justify-start lg:justify-center">
            {geneBenefit.map((e, index) => (
              <div key={index} className="flex-none w-72">
                <GeneBenefitCard props={e} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 mb-10 bg-blue-50 w-full h-auto p-10">
          <div className="flex flex-col justify-center items-start gap-5 p-10 bg-white rounded-md">
            <label className="text-2xl font-semibold">Chúng tôi là KYSAW</label>
            <label className="text-blue-500 text-2xl">{`"Beats your bad genes, keep yourself safe and well"`}</label>
            <div className="flex justify-between items-center gap-10 lg:flex-row flex-col">
              <p>KYSAW là đơn vị tiên phong đem lại giải pháp đông bộ sáng tạo khi ứng dụng công nghệ gene vào đời sông, kêt hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tâm soát sức khỏe lan man và hiệu quả trong quá trình điêu trị y tế</p>
              <div className="w-full h-full flex justify-center items-center rounded-md">
                <Image src={Kysaw} alt="kysaw" width={300} height={'50%'} layout="responsive" className="rounded-md" />
              </div>
            </div>
            <button className="btn btn-primary"><Link href={'/about'}>Tìm hiểu thêm</Link></button>
          </div>
        </div>
      </div>
    </main>
  );
}
