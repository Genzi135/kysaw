import { imgShared } from "../utils/images";
import HomePage from "./Homepage";
import Logo from '../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png';

export const metadata = {
  title: 'Trang Chủ - KYSAW',
  description: 'KYSAW cung cấp giải pháp sức khỏe toàn diện qua công nghệ xét nghiệm gene giúp tầm soát sớm ung thư, các bệnh lý mãn tính, cải thiện chất lượng cuộc sống và duy trì sự trẻ trung dài lâu',
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