import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, package: projectType, budget, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS?.replace(/\s+/g, ''),
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'm.devkontakt@gmail.com',
            replyTo: email,
            subject: `Nowe zapytanie od: ${name} (${projectType})`,
            text: `
                Nowe zapytanie z formularza kontaktowego:
                
                Imię i nazwisko: ${name}
                Email: ${email}
                Typ projektu: ${projectType}
                Budżet: ${budget}
                
                Wiadomość:
                ${message}
            `,
            html: `
                <h3>Nowe zapytanie z formularza kontaktowego</h3>
                <p><strong>Imię i nazwisko:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Typ projektu:</strong> ${projectType}</p>
                <p><strong>Budżet:</strong> ${budget}</p>
                <br/>
                <p><strong>Wiadomość:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
