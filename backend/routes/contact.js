import express from "express";
import { Resend } from 'resend';

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", 
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `The new submission is  from ...\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

export default router;
