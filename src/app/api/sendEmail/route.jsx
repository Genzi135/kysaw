import nodemailer from 'nodemailer';

export async function POST(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Sử dụng SMTP của Gmail
            port: 587,
            secure: false, // true cho port 465, false cho các port khác
            auth: {
                user: process.env.EMAIL_USER, // Đặt email người dùng từ biến môi trường
                pass: process.env.EMAIL_PASS, // Đặt mật khẩu từ biến môi trường
            },
        });

        try {
            // Gửi email
            let info = await transporter.sendMail({
                from: '"Website Contact Form" genzi13052002@example.com>', // Địa chỉ người gửi
                to: "phu13052002@gmail.com", // Địa chỉ người nhận
                subject: "New Contact Form Submission",
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            });

            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ success: true });
        } catch (error) {
            console.log(req);
            console.error("Error sending email:", error);
            res.status(500).json({ success: false });
        }
    } else {
        console.log(req);
        res.status(405).json({ message: 'Method not allowed' });
    }
}
