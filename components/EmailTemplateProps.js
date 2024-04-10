import * as React from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const EmailTemplateProps = async (props) => {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    react: (
      <div>
        <h1>Welcome, {props.firstName}!</h1>
      </div>
    ),
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}
export default EmailTemplateProps
