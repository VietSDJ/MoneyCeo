const EmailSendForm = (props) => {
  const contact = props
  console.log(props)
  return (
    <div>
      <h1>Contact Information</h1>
      <div>
        <p>
          <strong>First Name:</strong> {contact.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {contact.lastName}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <p>
          <strong>Message:</strong> {contact.message}
        </p>
      </div>
    </div>
  )
}
export default EmailSendForm
