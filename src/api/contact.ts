// @ts-ignore: runtime dependency in serverless environment
import nodemailer from "nodemailer";

declare const process: any;

// This handler assumes you're deploying to a platform that supports
// serverless functions (Vercel, Netlify, etc.). If you're hosting on
// plain GitHub Pages you will need a different strategy (the form
// cannot actually send mail from a static site).

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true", // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email", err);
    res.status(500).json({ success: false, error: "Failed to send" });
  }
}
