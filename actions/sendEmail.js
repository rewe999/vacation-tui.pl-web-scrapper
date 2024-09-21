const nodemailer = require('nodemailer');

function sendEmail(offer) {
    console.log('Sending email:', offer.hotelName);
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'your-email@gmail.com',
    //         pass: 'your-email-password'
    //     }
    // });
    //
    // let mailOptions = {
    //     from: 'your-email@gmail.com',
    //     to: 'recipient-email@gmail.com',
    //     subject: 'New Vacation Offer',
    //     text: `New offer available: ${JSON.stringify(offer)}`
    // };
    //
    // try {
    //     await transporter.sendMail(mailOptions);
    //     console.log('Email sent: ' + offer.hotelName);
    // } catch (error) {
    //     console.log('Error sending email: ', error);
    // }
}

module.exports = {
    sendEmail: sendEmail
}