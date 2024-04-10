// pages/api/sendEmail.js

import { sendEmail } from "./nodemailer"

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await sendEmail(req.body)
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" })
    }
  } else {
    res.status(405).json({ error: "Method not allowed" })
  }
}
