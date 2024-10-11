import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import HomepageBanner from '../../assets/Banners/HomepageBanner.png';
import FloatingMenu from "../components/FloatingMenu";
import { imgShared } from "../utils/images";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'KYSAW',
  description: 'KYSAW cung cấp giải pháp sức khỏe toàn diện qua công nghệ xét nghiệm gene giúp tầm soát sớm ung thư, các bệnh lý mãn tính, cải thiện chất lượng cuộc sống và duy trì sự trẻ trung dài lâu',
  keywords: 'KYSAW, công nghệ gene, chăm sóc sức khỏe, tài chính gia đình, đào tạo dinh dưỡng, giải pháp sức khỏe, tầm soát sức khỏe, điều trị y tế',
  author: 'KYSAW Team',
  robots: 'index, follow',
  ogTitle: 'Trang Chủ - KYSAW',
  ogDescription: 'KYSAW là đơn vị tiên phong trong việc ứng dụng công nghệ gene vào đời sống, cung cấp các giải pháp chăm sóc sức khỏe toàn diện và bảo vệ tài chính gia đình.',
  ogImage: HomepageBanner,
  ogUrl: 'https://kysaw.vn',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-K7903M6JL3`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K7903M6JL3');
            `,
          }}
        />
      </head>
      <body className={inter.className + "font-manrope scroll-smooth text-black bg-white"}>
        <Navbar />
        <Toaster />
        {children}
        <FloatingMenu />
        <Footer />
      </body>
    </html>
  );
}
