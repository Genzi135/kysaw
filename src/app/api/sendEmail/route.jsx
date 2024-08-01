// pages/api/sendEmail.js
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { name, phone, question } = await req.json();

        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail', // Use your email service provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });
        console.log(process.env.EMAIL_USER);
        // Email options
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'genzi13052002@gmail.com', // Replace with the recipient's email address
            subject: 'New Inquiry',
            text: `Name: ${name}\nPhone: ${phone}\nQuestion: ${question}`,
        };

        // Send the email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ status: 'success', message: 'Email sent successfully' });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ status: 'error', message: 'Failed to send email' });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'This endpoint only supports POST requests' });
}
