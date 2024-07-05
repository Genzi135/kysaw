'use client'
import '../../globals.css'

export default function ViewTest() {

    const genloveskinLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_button_ehlpxl.svg';
    const genlovekidLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920402/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_button_n5p1ps.svg';
    const genlovemeLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920398/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_button_ehrsok.svg';
    const genlovefitLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_Button_rxrnc4.svg';
    const gencarepreLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_button_oz5lyn.svg';
    const yamugenLogoHex = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920403/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Button_yhc7n3.svg';

    const skindesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920398/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Skin_Tag_nqgsk0.svg';
    const kiddesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920399/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Kid_Tag_slhy6o.svg';
    const medesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Me_Tag_fcsp5d.svg';
    const fitdesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_GenLove_Fit_Tag_oyoubt.svg';
    const yamudesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920404/kysaw/listProduct/KYSAW_Product_Logos_Yamugene_Tag_ixomz2.svg';
    const gencarepredesc = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719920394/kysaw/listProduct/KYSAW_Product_Logos_Gencare_Premium_Tag_mphl8m.svg';

    const subitem = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875911/kysaw/listProduct/KYSAW_Product_Logos_DNA_nip_qiosut.svg';

    const bg1 = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Ribbon_pueyvf.svg';
    const bg2 = 'https://res.cloudinary.com/diribdgsz/image/upload/v1719875927/kysaw/listProduct/KYSAW_Product_Logos_Ribbon_short_dri7hh.svg'


    return (
        <div className=" flex justify-center items-center gap-20">
            <div className='flex flex-col gap-2 items-center p-10' style={{}}>
                <img src={bg1} alt='bg' width={750} height={1700} className='relative opacity-80' />
                <div className='absolute flex -translate-x-8 translate-y-8'>
                    <img src={subitem} alt='subitem' width={90} height={90} className='rotate-180 opacity-50' />
                    <img src={subitem} alt='subitem' width={150} height={150} className='translate-y-2 opacity-65' />
                </div>

                <div className='absolute flex gap-1 translate-y-[100px] -translate-x-8'>
                    <img src={subitem} alt='subitem' width={180} height={180} className='rotate-180 translate-x-2 translate-y-5 opacity-80' />
                    <img src={medesc} alt='desc' width={200} height={200} className='animate-' />
                    <a href='/product/genloveme' className='group relative flex justify-center items-center tooltip' data-tip='Click để xem chi tiết' >
                        <div className='absolute opacity-0 translate-x-0 duration-200 group-hover:opacity-100 group-hover:-translate-x-56 bg-white '>GEN LOVE ME</div>
                        <img src={genlovemeLogoHex} alt='item' width={230} height={230} className='animate-float cursor-pointer' />
                    </a>
                </div>
                <div className='absolute flex gap-1 translate-y-[300px] translate-x-6'>
                    <a href='/product/genloveskin' className='group relative flex justify-center items-center tooltip' data-tip='Click để xem chi tiết' >
                        <img src={genloveskinLogoHex} alt='item' width={320} height={320} className='animate-float z-20' />
                        <div className='absolute opacity-0 scale-0 -translate-y-2 translate-x-0 duration-300 group-hover:opacity-100 group-hover:translate-x-[320px]  group-hover:scale-100 h-[180px] w-fit bg-white z-10 p-2 pr-6 flex flex-col items-start rounded-xl'>
                            <div>
                                Công nghệ: <label className='font-manropeBold'>Next Generation Sequencing</label>
                            </div>
                            <div className='text-left text-nowrap'>
                                Phân tích 7 gene đánh giá 5 đặc tính làn da: <br></br>
                                - Mức độ thiếu hụt chất chống oxy hóa<br></br>
                                - Mức độ phân hủy collagen sớm <br></br>
                                - Mức độ nhạy cảm ảnh nắng mặt trời <br></br>
                                - Khuynh hướng lão hóa da sớm <br></br>
                                - Khuynh hướng rối loạn sắc tố da
                            </div>
                        </div>
                    </a>
                    <img src={skindesc} alt='desc' width={280} height={280} className='animate-' />
                    <img src={subitem} alt='subitem' width={250} height={250} className=' translate-y-[-22px] opacity-90  ' />
                </div>

                <div className='absolute flex gap-1 translate-y-[550px] translate-x-32'>
                    <img src={kiddesc} alt='desc' width={200} height={200} className='animate-' />
                    <a href='/product/genlovekid' className='group relative flex justify-center items-center tooltip' data-tip='Click để xem chi tiết'>
                        <div className='absolute opacity-0 scale-0 -translate-y-2 translate-x-0 duration-300 group-hover:opacity-100 group-hover:-translate-x-[280px]  group-hover:scale-100 h-fit w-fit bg-white z-10 p-2 pr-6 flex flex-col items-start rounded-xl'>
                            <div className='text-nowrap'>
                                Công nghệ: <label className='font-manropeBold'>Next Generation Sequencing</label>
                            </div>
                            <div className='text-left text-nowrap'>
                                Phân tích 37 gen để xác định: <br></br> - Khuynh hướng tính cách<br></br>- Sức mạnh - thể chất <br></br>- Tiềm năng của trẻ.
                                <br></br>Áp dụng cho trẻ từ 0 – 17 tuổi
                            </div>
                        </div>
                        <img src={genlovekidLogoHex} alt='item' width={230} height={230} className='animate-float z-20' />
                    </a>
                </div>
                <div className='absolute flex gap-1 translate-y-[700px] -translate-x-32'>
                    <a href='/product/genlovefit' className='group relative flex justify-center items-center tooltip' data-tip='Click để xem chi tiết' >
                        <img src={genlovefitLogoHex} alt='item' width={290} height={290} className='animate-float z-20' />
                        <div className='absolute opacity-0 scale-0 -translate-y-2 translate-x-0 duration-300 group-hover:opacity-100 group-hover:translate-x-[310px]  group-hover:scale-100 h-[180px] w-fit bg-white z-10 p-2 pr-6 flex flex-col items-start rounded-xl'>
                            <div>
                                Công nghệ: <label className='font-manropeBold'>Next Generation Sequencing</label>
                            </div>
                            <div className='text-left text-nowrap'>
                                Phân tích 5 gene đánh giá 5 đặc tính làn da: <br></br>
                                - Khả năng giảm cân<br></br>
                                - Nguy cơ béo phì <br></br>
                                - Khả năng chuyển hóa tinh bột <br></br>
                                - Khả năng chuyển hóa chất béo <br></br>
                                - Khả năng hình thành khối cơ mới
                            </div>
                        </div>
                    </a>

                    <img src={fitdesc} alt='desc' width={250} height={250} className='animate-' />
                    <img src={subitem} alt='subitem' width={160} height={160} className=' translate-y-[-22px] opacity-65' />
                </div>

                <div className='absolute flex gap-1 translate-y-[920px] '>
                    <img src={subitem} alt='subitem' width={180} height={180} className='rotate-180 translate-x-2 translate-y-5 opacity-80' />
                    <img src={yamudesc} alt='desc' width={280} height={280} className='animate-' />
                    <a href='/product/yamuGen' className='group relative flex justify-center items-center tooltip' data-tip='Click để xem chi tiết'>
                        <div className='absolute opacity-0 scale-0 -translate-y-0 translate-x-0 duration-300 group-hover:opacity-100 group-hover:-translate-x-[425px]  group-hover:scale-100 h-fit w-fit bg-white z-10 p-2 pr-6 flex flex-col items-start rounded-xl'>
                            <div className='text-nowrap'>
                                Công nghệ: <label className='font-manropeBold'>Multiplex PCR</label>
                            </div>
                            <div className='text-left text-nowrap'>
                                Xét nghiệm 47 gene sàng lọc nguy cơ 16-18 bệnh phổ biến nhất tại VN.
                            </div>
                            <div className='text-left '>
                                Gồm 10 ung thư: Dạ dày, Đại tràng, Phổi, Gan, Tụy, Tuyến giáp, Bạch cầu cấp tính, Vú, Buồng trứng, Tử cung, Tuyến tiền liệt
                            </div>
                            <div className='text-left'>
                                Các bệnh mãn tính khác: Tiểu đường, Huyết áp cao, Tim mạch, Nhồi máu cơ tim, Đột quỵ, Suy giảm trí nhớ, Miễn dịch, Trao đổi chất
                            </div>
                        </div>
                        <img src={yamugenLogoHex} alt='item' width={340} height={340} className='animate-float z-20' />

                    </a>
                </div>
                <div className='absolute flex gap-1 translate-y-[1197px] -translate-x-14'>
                    <a href='/product/gencarepremium' className='group relative flex justify-center items-center tooltip' data-tip='Click để xem chi tiết' >
                        <img src={gencarepreLogoHex} alt='item' width={300} height={300} className='animate-float z-20' />
                        <div className='absolute opacity-0 scale-0 -translate-y-2 translate-x-0 duration-300 group-hover:opacity-100 group-hover:translate-x-[320px]  group-hover:scale-100 h-fit w-fit min-w-[350px] bg-white z-10 p-2 pr-6 flex flex-col items-start rounded-xl'>
                            <div>
                                Công nghệ: <label className='font-manropeBold'>Next Generation Sequencing</label>
                            </div>
                            <div className='text-left '>
                                Xét nghiệm tầm soát nguy cơ mắc 54 loại ung thư và bệnh mạn tính di truyền. Trong đó:
                                <br></br>
                                - Khảo sát 21 gen cho 15 loại ung thư di truyền theo khuyến cáo của Hiệp Hội Di Truyền Y học Hoa Kỳ<br></br>
                                - Khảo sát 10 gen cho 9 bệnh di truyền lặn phổ biến <br></br>
                                - Khảo sát 34 gen cho 30 hội chứng và bệnh mạn tính di truyền. Tích hợp xét nghiệm SPOT-MAS (không thu phí) <br></br>
                                - Xét nghiệm ứng dụng kĩ thuật giải trình tự gen thế hệ mới (NGS) phát hiện (ctDNA) từ tế bào ung thư, hỗ trợ tầm soát phát hiện sớm 05 loại ung thư phổ biến nhất (Vú, Phổi, Gan, Dạ Dày, Đại – trực tràng)<br></br>
                            </div>
                        </div>
                    </a>

                    <img src={gencarepredesc} alt='desc' width={250} height={250} className='animate-' />
                </div>

            </div>
        </div>
    )
}