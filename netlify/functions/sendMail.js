const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
    const { fullname, email, message } = JSON.parse(event.body);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
    };
};
