'use client'
import Image from "next/image";
import GeneBenefit1 from '../../assets/Slider/Hieu ro co the.png';
import GeneBenefit2 from '../../assets/Slider/Phong ngua rui ro.png';
import GeneBenefit3 from '../../assets/Slider/Toi uu suc khoe.png';
import GenePremium from '../../assets/Products/Gencare Premium.jpg';
import YamuGene from '../../assets/Products/Yamugene.jpg';
import GeneBenefitCard from "@/components/GeneBenefitCard";
import LogoBackgroundImage from '../../assets/Logo/KYSAW_LOGO_FINAL_WHITE_COLOR.png';
import LogoBackgroundMain from '../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png';
import JH from '../../assets/Partners/JH.jpg';
import GS from '../../assets/Partners/GS.png';
import { COLOR } from "@/utils/COLORS";
import ProductCard from "@/components/ProductCard";
import ReasonCard from "@/components/ReasonCard";
import TeamCard from "@/components/TeamCard";

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

  const products = [
    {
      title: 'YamuGene',
      image: YamuGene,
      price: 2000000,
      content: {
        title: 'Content...',
        benefit: [
          'benefit 1', 'benefit 2', 'benefit 3'
        ],
      },
      link: '/product/yamugene'
    }, {
      title: 'GenePremium',
      image: GenePremium,
      price: 2000000,
      content: {
        title: 'Content...',
        benefit: [
          'benefit 1', 'benefit 2', 'benefit 3'
        ],
      },
      link: '/product/genepremium',
    }, {
      title: 'GeneLove',
      image: GenePremium,
      price: 2000000,
      content: {
        title: 'Content...',
        benefit: [
          'benefit 1', 'benefit 2', 'benefit 3'
        ],
      },
      link: '/product/genelove'
    },
  ]

  const reasonChoose = [
    {
      image: '',
      title: 'reason 1',
    }, {
      image: '',
      title: 'reason 2',
    }, {
      image: '',
      title: 'reason 3',
    }, {
      image: '',
      title: 'reason 4',
    },
  ]

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
    <main className="mt-14">
      <div style={{ backgroundColor: COLOR.backgroundPrimary, }} className="flex justify-around items-center relative w-full h-auto p-5 md:p-20 gap-5 flex-wrap md:flex-nowrap">
        <div className="flex flex-col justify-center items-start gap-5">
          <label className="text-teal-400 text-3xl md:text-6xl font-semibold mt-10">KYSAW</label>
          <label className="text-white text-xl md:text-2xl flex flex-wrap gap-2">
            <label>{`"Beats your bad genes, `} </label>
            <label>{`keep yourself save and well"`}</label>
          </label>
          <label className="text-white text-sm">KYSAW là cánh tay nối dài của các công ty xét nghiệm gene di truyền, đem các sản phẩm có tính thiết thực đối với sức khỏe lan tỏa đến người tiêu dùng.</label>
        </div>
        <Image src={LogoBackgroundImage} alt="logoBackground" height={500} className="opacity-5 absolute mt-20 -z-0" layout="responsive" />
        <Image src={LogoBackgroundMain} alt="logoBackground" height={200} className="" />
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 bg-white" style={{}}>
        <label className="text-black text-xl md:text-3xl font-semibold">Lợi ích của việc giải mã gen</label>
        <div className="flex flex-1 md:pl-5 md:pr-5 flex-wrap justify-around items-center gap-5 md:gap-10">
          {geneBenefit.map((e, index) => {
            return (
              <GeneBenefitCard key={index} props={e} />
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10" style={{ backgroundColor: COLOR.backgroundPrimary10 }}>
        <label className="text-black text-xl md:text-3xl font-semibold">Sản phẩm gen từ chúng tôi</label>
        <div className="flex flex-1 md:pl-5 md:pr-5 flex-wrap justify-around items-center gap-5 md:gap-10">
          {products.map((e, index) => {
            return (
              <ProductCard data={e} key={index} />
            )
          })}
        </div>
        <div className="flex justify-center items-center">
          <a href="/product">
            <button className="btn text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>Xem thêm sản phẩm   →</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 gap-10" style={{ backgroundColor: COLOR.backgroundPrimary10 }}>
        <lable className="text-black text-xl md:text-3xl font-semibold">Tại sao nên chọn KYSAW</lable>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {reasonChoose.map((e, index) => {
            return (
              <ReasonCard props={e} key={index} />
            )
          })}
        </div>
      </div>
      <div className="flex justify-center items-center p-5 md:p-10 bg-white">
        <div className="flex flex-col justify-center items-start p-5 md:p-10 rounded-lg text-white" style={{ backgroundColor: COLOR.backgroundPrimary }}>
          <p className="md:text-xl text-sm">
            <label className="font-semibold">KYSAW</label> là đơn vị tiên phong đem lại giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong quá trình điều trị y tế.
          </p>
          <p className="md:text-xl text-sm">
            KYSAW là cánh tay nối dài của các công ty xét nghiệm gene di truyền, đem các sản phẩm có tính
            thiết thực đối với sức khỏe lan tỏa đến người tiêu dùng.
            Chúng tôi hiểu rằng, giá trị từ thông tin di truyền là vô cùng to lớn. Biết được thông tin di truyền
            của bản thân và những người thân trong gia đình sẽ là lợi thế tuyệt vời để có thể thiết kế một
            cuộc sống khỏe mạnh hơn, ít bệnh tật hơn, đạt được nhiều thành tựu hơn, kéo dài tuổi thọ và
            nâng cao chất lượng cuộc sống hiệu quả.
          </p>
          <p className="md:text-xl text-sm">
            Thông tin di truyền giúp chúng ta định hướng được những biến cố sức khỏe có thể xảy ra trong
            tương lai, từ đó ta có nhiều thời gian để lên kế hoạch ứng phó với những nguy cơ và đẩy lùi bệnh
            tật ngay từ thời điểm hiện tại, đồng thời chuẩn xác sàng lọc phát hiện các bệnh lý nguy hiểm từ
            giai đoạn rất sớm để vượt qua cách dễ dàng.
          </p>
          <p className="md:text-xl text-sm">
            KYSAW hân hạnh phân phối độc quyền sản phẩm Yamugene từ công ty JH Bioholdings và dòng
            sản phẩm GenLove từ công ty Gene Solutions - Việt Nam.
          </p>
          <label className="font-semibold md:text-xl text-base">Beat your bad genes, keep you safe and well! - KYSAW</label>
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
    </main>
  );
}
