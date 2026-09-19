import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }

    const recipientEmail = "aakashchuahan200@gmail.com";
    const userEmail = process.env.EMAIL_USER || recipientEmail;
    const pass = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

    // Always log to console as fail-safe
    console.log("=== Contact Submission Received ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Company: ${company || "Not specified"}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("===================================");

    if (!pass) {
      return NextResponse.json(
        {
          success: true,
          message: "Message received! (Set EMAIL_PASS in .env.local for automatic Gmail delivery)",
        },
        { status: 200 }
      );
    }

    try {
      // Configure Nodemailer transporter for Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: userEmail,
          pass: pass.replace(/\s+/g, ""),
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact" <${userEmail}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; padding: 24px; color: #111; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #111; margin-top: 0; font-size: 20px;">⚡ New Portfolio Inquiry</h2>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${company || "Not specified"}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="margin: 8px 0;"><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #111; border-radius: 6px; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${message}</div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0 12px;" />
            <p style="font-size: 12px; color: #64748b; margin: 0;">Sent via portfolio contact form to ${recipientEmail}</p>
          </div>
        `,
        text: `New Portfolio Inquiry from ${name}\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      console.log(`✅ Email sent successfully to ${recipientEmail} from ${email}`);

      return NextResponse.json(
        {
          success: true,
          message: `Your message has been sent to ${recipientEmail} successfully!`,
        },
        { status: 200 }
      );
    } catch (smtpError) {
      console.error("❌ SMTP Delivery Error:", smtpError.message);
      
      // Return 200 with fallback so user submission is saved and fallback mailto is offered
      return NextResponse.json(
        {
          success: true,
          fallbackMailto: true,
          message: "Your message has been captured. If you would also like to open your mail app directly, click below.",
          smtpError: smtpError.message,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
