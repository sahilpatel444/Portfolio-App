const nodemailer = require("nodemailer");

//console.log(" API_MAILJET", process.env.API_MAILJET);
//transport

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sahilvaddoriya444@gmail.com",
    pass: "llfjzbygkcuwbncv",
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    //email matter
    let mailOptions = {
      from: "sahilvaddoriya444@gmail.com",
      to: "vaddoriyasahil444@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
             <h5>Detail Information</h5>
             <ul>
             <li><p>Name : ${name}</p></li>
             <li><p>Email : ${email}</p></li>
             <li><p>Message : ${msg}</p></li>
             </ul>
          `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(`Error: ${error}`);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return res.status(200).send({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
