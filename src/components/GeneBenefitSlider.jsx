import GeneBenefitCard from "./GeneBenefitCard";
import GeneBenefit1 from '../../assets/Slider/Hieu ro co the.png';
import GeneBenefit2 from '../../assets/Slider/Phong ngua rui ro.png';
import GeneBenefit3 from '../../assets/Slider/Toi uu suc khoe.png';
import { useState } from "react";

export default function GeneBenefitSlider() {
    const geneBenefit = [
        {
            path: 'https://res.cloudinary.com/diribdgsz/image/upload/v1720149610/kysaw/benefit/Duke_Illustration_for_KYSAW-39_lboj0g.png',
            label: 'HieuRoCoThe',
            title: 'Hiểu rõ cơ thể',
            content: 'Xét nghiệm DNA giúp bạn hiểu rõ hơn về cơ thể và gen di truyền của mình. Thông tin từ xét nghiệm có thể tiết lộ về đặc điểm sinh học, tình trạng sức khỏe, và tiềm năng di truyền, giúp bạn có cái nhìn toàn diện về bản thân.'
        },
        {
            path: 'https://res.cloudinary.com/diribdgsz/image/upload/v1720149610/kysaw/benefit/Duke_Illustration_for_KYSAW-38_ntav3s.png',
            label: 'PhongNguaRuiRo',
            title: 'Phòng ngừa rủi ro',
            content: 'Xét nghiệm DNA giúp phát hiện các yếu tố rủi ro di truyền, từ đó bạn có thể chuẩn bị và thực hiện các biện pháp phòng ngừa kịp thời nhằm giảm thiểu nguy cơ mắc các bệnh di truyền và bảo vệ sức khỏe của bản thân bạn và gia đình.'
        },
        {
            path: 'https://res.cloudinary.com/diribdgsz/image/upload/v1720149610/kysaw/benefit/Duke_Illustration_for_KYSAW-40_uv5xjf.png',
            label: 'ToiUuSucKhoe',
            title: 'Tối ưu sức khỏe',
            content: 'Dựa trên kết quả xét nghiệm DNA, bạn có thể điều chỉnh chế độ ăn uống, tập luyện và lối sống sao cho phù hợp với cấu trúc gen của mình. Điều này giúp tối ưu hóa sức khỏe và tăng cường chất lượng cuộc sống hàng ngày.'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? geneBenefit.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === geneBenefit.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex justify-center items-center w-full p-5">
            <div className="flex flex-col justify-center items-center p-5 gap-5 max-w-[1220px] w-full ">
                <label className="text-black text-xl md:text-3xl font-manropeBold mt-5">Lợi ích của việc giải mã gen</label>
                <div className="w-full overflow-hidden justify-start md:justify-center items-center hidden sm:flex">
                    <div className="flex md:pl-5 md:pr-5 overflow-x-auto scrollbar-hide w-full md:w-auto md:p-10">
                        <div className="flex flex-nowrap gap-5 md:gap-10 pb-5 p-5">
                            {geneBenefit.map((e, index) => (
                                <GeneBenefitCard key={index} props={e} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex sm:hidden relative flex-col justify-center items-center">
                    <div className="relative w-[100vw] overflow-hidden">
                        <div className="flex justify-center items-center">
                            <GeneBenefitCard props={geneBenefit[currentIndex]} />
                        </div>
                    </div>
                    <div className="flex justify-between w-full mt-5 absolute top-[8] p-5">
                        <button
                            onClick={handlePrev}
                            style={{
                                background: 'rgba(0, 0, 0, 0.2)',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                padding: '0.5rem',
                            }}
                        >
                            ‹
                        </button>
                        <button
                            onClick={handleNext}
                            style={{
                                background: 'rgba(0, 0, 0, 0.2)',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                padding: '0.5rem',
                            }}
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
