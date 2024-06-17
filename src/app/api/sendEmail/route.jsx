import nodemailer from 'nodemailer';

export async function POST(req) {
    console.log(req.body);
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Check if all required fields are provided
        // if (!name || !email || !message) {
        //     return Response.json({ success: false, message: 'Missing required fields' });
        // }

        try {
            // Create a Nodemailer transporter
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com", // SMTP host of your email provider
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.EMAIL_USER, // Your email address
                    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
                },
            });

            // Define email options
            let mailOptions = {
                from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
                to: "genzi13052002@gmail.com", // Receiver's email address
                subject: "New Contact Form Submission",
                // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            };

            // Send email
            let info = await transporter.sendMail(mailOptions);

            console.log("Message sent: %s", info.messageId);
            Response.json({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error("Error sending email:", error);
            Response.json({ success: false, message: 'Failed to send email' });
        }
    } else {
        // res.setHeader('Allow', ['POST']);
        Response.json({ message: `Method ${req.method} not allowed` });
    }
}
