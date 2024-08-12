import { imgShared } from "../utils/images";
import HomePage from "./Homepage";
import Logo from '../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png';

export const metadata = {
  title: 'Trang Chủ - KYSAW',
  description: 'KYSAW là đơn vị tiên phong đem lại giải pháp đồng bộ sáng tạo khi ứng dụng công nghệ gene vào đời sống, kết hợp cùng các giải pháp chăm sóc sức khỏe chủ động, bảo vệ tài chính gia đình, chương trình đào tạo dinh dưỡng phòng bệnh giúp khách hàng có một giải pháp trọn vẹn, an tâm, giảm chi phí tầm soát sức khỏe lan man và hiệu quả trong quá trình điều trị y tế.',
  keywords: 'KYSAW, kysaw, công nghệ gene, chăm sóc sức khỏe, tài chính gia đình, đào tạo dinh dưỡng, giải pháp sức khỏe, tầm soát sức khỏe, điều trị y tế',
  author: 'KYSAW Team',
  robots: 'index, follow',
  ogTitle: 'Trang Chủ - KYSAW',
  ogDescription: 'KYSAW là đơn vị tiên phong trong việc ứng dụng công nghệ gene vào đời sống, cung cấp các giải pháp chăm sóc sức khỏe toàn diện và bảo vệ tài chính gia đình.',
  ogImage: Logo,
  ogUrl: 'https://kysaw.vn',
};


export default function Home() {
  return (
    <HomePage />
  )
}