const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: (req, res) => {
        // console.log(req.body);
        const output = `
            <p>You have a new email from your website</p>
            <p>${req.body.name}</p>
            <p>${req.body.from}</p>
            <p>${req.body.message}</p>
        `;

        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS  
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Nocturnal Mailer" <brandoTestMail@gmail.com>', // sender address
            to: 'brandoTestMail@gmail.com', // list of receivers
            subject: 'Message from Nocturnal', // Subject line
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }else{
                console.log(info)
            }
            
        });
        //----------------------End Send Email----------------------------// 
    }
}