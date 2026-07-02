const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

    }

});

router.post("/", async (req, res) => {

    const {

        name,
        email,
        subject,
        message

    } = req.body;

    if (

        !name ||

        !email ||

        !subject ||

        !message

    ) {

        return res.status(400).json({

            success: false,

            message: "All fields are required."

        });

    }

    try {

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            replyTo: email,

            subject: `Portfolio Contact - ${subject}`,

            html: `

                <h2>New Portfolio Message</h2>

                <hr>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Subject:</strong> ${subject}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>

            `

        });

        res.json({

            success: true,

            message: "Message sent successfully."

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,

            message: "Failed to send email."

        });

    }

});

module.exports = router;