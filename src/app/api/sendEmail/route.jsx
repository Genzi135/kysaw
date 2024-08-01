import 'dotenv/config';
import { NextResponse } from 'next/server';
const { Recipient, EmailParams, MailerSend } = require('mailersend');

export async function POST(req) {
    try {
        const data = await req.json();
        const { name, phone, question } = data;

        const mailersend = new MailerSend({
            apiKey: process.env.MAILERSEND_TOKEN,
        });

        const recipients = [new Recipient("kysaw.vn@gmail.com", "Recipient")];

        const emailParams = new EmailParams()
            .setFrom({ email: "MS_dsHoVu@trial-3zxk54v0061gjy6v.mlsender.net", name: "KYSAW-website" })
            .setTo(recipients)
            .setSubject("Liên hệ từ khách hàng")
            .setHtml(`
                <div>
                    <h1>Thông tin liên hệ từ khách hàng</h1>
                    <p><strong>Tên:</strong> ${name}</p>
                    <p><strong>Số điện thoại:</strong> ${phone}</p>
                    <p><strong>Câu hỏi:</strong></p>
                    <blockquote style="background-color: #f9f9f9; border-left: 10px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px;">
                        ${question}
                    </blockquote>
                </div>
            `)
            .setText(`Tên: ${name}\nSố điện thoại: ${phone}\nCâu hỏi: ${question}`);

        await mailersend.email.send(emailParams);

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error("Error in sending email:", error);
        return NextResponse.json({ error: 'Error sending email', details: error.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'This endpoint only supports POST requests' });
}
