require('dotenv').config();
const nodemailer = require('nodemailer');


console.log('EMAIL_SERVICE:', process.env.EMAIL_SERVICE);
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

const sendResetPasswordEmail = async (email, resetUrl) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        transporter.verify(function(error, success) {
            if (error) {
                console.error('Transporter error:', error);
                throw new Error('Failed to verify transporter');
            } else {
                console.log('Server is ready to take our messages:', success);
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
                  `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
                  `${resetUrl}\n\n` +
                  `If you did not request this, please ignore this email and your password will remain unchanged.\n`
        };

        await transporter.sendMail(mailOptions);
        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send password reset email');
    }
};

module.exports = { sendResetPasswordEmail };
