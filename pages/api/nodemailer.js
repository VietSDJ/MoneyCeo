import nodemailer from "nodemailer"

const { SMTP_PASSWORD, SMTP_EMAIL } = process.env
export const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587, // or your SMTP port
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
})
export const sendEmail = async (body) => {
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "Money CEO <yourmoneymapceo@gmail.com>",
      to: "support@moneymap.sg",
      subject: "New Contact Information",
      html: `<div>
      <h1>Contact Information</h1>
      <div>
        <p>
          <strong>First Name:</strong> ${body.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> ${body.lastName}
        </p>
        <p>
          <strong>Email:</strong> ${body.email}
        </p>
        <p>
          <strong>Phone:</strong> ${body.phone}
        </p>
        <p>
          <strong>Message:</strong> ${body.message}
        </p>
      </div>
    </div>`,
    })

    console.log("Message sent: %s", info.messageId)
    return info
  } catch (error) {
    console.error("Error occurred while sending email:", error)
    throw error
  }
}
