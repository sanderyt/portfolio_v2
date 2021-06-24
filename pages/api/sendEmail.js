// const mailgun = require("mailgun-js");
// const API_KEY = "2701cead9eb0a35d663e307859ffc64b-2fbe671d-d7af772a";
// const DOMAIN = "https://api.mailgun.net/v3/sandboxaad6d95cff054af3a7eb2c94e96b88d1.mailgun.org";

// const mg = mailgun({
//   apiKey: API_KEY,
//   domain: DOMAIN,
// });

module.exports = async (req, res) => {
  // const data = {
  //   from: "Excited User <me@samples.mailgun.org>",
  //   to: "s.rijsoort@gmail.com",
  //   subject: "Hello",
  //   text: "Testing some Mailgun awesomness!",
  // };
  // return new Promise((resolve, reject) => {
  //   mg.messages().send(data, function (error, body) {
  //     console.log(error, "body");
  //     if (error) reject(error);
  //     if (body) resolve(body);
  //   });
  // });

  res.json({ message: "The serverless function is working" });
};
