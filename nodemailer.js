'use strict'
require('dotenv').config();

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'in-dev.work', // Сервер исходящей почты (SMTP) из настроек Gmail
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL,   // тянется из .env
        pass: process.env.PASSWORD // тянется из .env
    }
});

const mailer = message => {
    transporter.sendMail(message, (err, info) =>{
        if(err) return console.log(err);
        console.log(`Email sent: `, info);
    })
};

module.exports = mailer;