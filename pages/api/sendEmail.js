const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const mailersend = new MailerSend({
  api_key: process.env.MAILSENDER_TOKEN,
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json("This method is not allowed");
  }

  const { message, name, email } = req.body;

  if (!message) {
    return res.status(400).json("Missing message");
  }

  if (!name) {
    return res.status(400).json("Missing name");
  }

  if (!message) {
    return res.status(400).json("Missing message");
  }

  const recipients = [new Recipient("s.rijsoort@gmail.com", "Sander van Rijsoort")];

  const emailParams = new EmailParams()
    .setFrom("info@reactdev.io")
    .setFromName("Sander van Rijsoort")
    .setRecipients(recipients)
    .setSubject("A message from reactdev.io")
    .setHtml(
      `Dear Sander, You have received a new message from reactdev.io: ${message} <br /> Email is ${email}`
    )
    .setText(
      `Dear Sander, You have received a new message from reactdev.io: ${message}. Email is ${email}`
    );

  const response = await mailersend.send(emailParams);

  if (response.status !== 202) {
    return res.json({ message: response.statusText });
  }

  res.status(200).json({ message: "Your email was successfully send" });
};
