module.exports ={ 
    
    //Create Blog Message
    createMes: (req, res) => {
        const db = req.app.get('db');
        db.createMes().then(()=>{
            res.status(200).send()
        }).catch(()=> res.status(500).send())
    },
    //Get blog messages
    getMessages: (req, res) => {
        const db = req.app.get('db');
        db.getMessages({}).then(()=> {
            res.status(200).send()
        }).catch(()=> res.status(500).send())
    },
    //Get character info
    getCharacters: (req, res) => {
        const db = req.app.get('db');
        db.getCharacters().then(()=> {
            res.status(200).send()
        }).catch(()=> res.status(500).send())
    },

    //Get world info
    getWorldInfo: (req, res) => {
        const db = req.app.get('db');
        db.getWorldInfo({}).then(()=> {
            res.status(200).send()
        }).catch(()=> res.status(500).send())
    },

    //Send Email
    sendEmail: (req,res) => {
        const output =`
            <p>You have a new email from your website</p>
            <p>${req.body.message}</p>
        `;

        // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'newemail@replacethis.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nocturnal Mailer" <newemail@replacethis.com>', // sender address
        to: 'powellbrandon@outlook.com', // list of receivers
        subject: 'Message for David', // Subject line
        text: 'Hey David!', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
    //----------------------End Send Email----------------------------// 
    }
}