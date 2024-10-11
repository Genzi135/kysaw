import About from '../../../components/About'
import LogoKysaw from '../../../../assets/Logo/KYSAW_LOGO_FINAL_FULL_COLOR.png'

export const metadata = {
    title: 'Giới thiệu - Kysaw',
    description: 'Tìm hiểu tầm nhìn, sứ mệnh và đội ngũ của KYSAW - những người dẫn đầu trong lĩnh vực chăm sóc sức khỏe và xét nghiệm gene tại Việt Nam.',
    keywords: 'Kysaw, công nghệ gene, chăm sóc sức khỏe, tài chính gia đình, đào tạo dinh dưỡng, giải pháp sức khỏe, tầm soát sức khỏe, điều trị y tế',
    author: 'Kysaw Team',
    robots: 'index, follow',
    ogTitle: 'Giới thiệu - Kysaw',
    ogDescription: 'Kysaw là đơn vị tiên phong trong việc ứng dụng công nghệ gene vào đời sống, cung cấp các giải pháp chăm sóc sức khỏe toàn diện và bảo vệ tài chính gia đình.',
    ogImage: LogoKysaw,
    ogUrl: 'https://kysaw.com/about',
};

export default function AboutPage() {
    return (
        <About />
    )
}