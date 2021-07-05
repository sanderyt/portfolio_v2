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

  const recipients = [new Recipient("your@client.com", "Your Client")];

  const emailParams = new EmailParams()
    .setFrom("info@domain.com")
    .setFromName("Your Name")
    .setRecipients(recipients)
    .setSubject("Subject")
    .setHtml("This is the HTML content")
    .setText("This is the text content");

  const response = await mailersend.send(emailParams);

  if (response.status !== 200) {
    return res.json({ message: response.statusText });
  }

  res.status(200).json({ message: "Your email was successfully send" });
};
