const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer')
    , cors = require('cors')
    , controller = require('./controller/controller')
    , dotenv = require('dotenv').config()
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , axos = require('axios');


const app = express();
const authController = require('./controller/auth_controller')
const mailController = require('./controller/mail_controller')
app.use(bodyParser.json());
//bodyParser middleware from bodyparser github repo
var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
//--------------------END-------------------------//
app.use(cors());



massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
})
//Set up session and passport.
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//--End session and passpot setup--//

//Auth0 Strategy
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');

    let { displayName, user_id, email } = profile
    db.find_user([user_id]).then((users) => {
        console.log(profile)
        console.log(users)

        if (!users[0]) {
            db.create_user([
                displayName,
                email,
                user_id
            ]).then(user => {

                return done(null, user[0].id)
            })
        } else {
            return done(null, users[0].id)
        }
    })

}))
//---End Strategy---//

//serialize and deserialize the user
passport.serializeUser((profile, done) => {
    return done(null, profile)
})
passport.deserializeUser((profile, done) => {
    return done(null, profile)
})
// passport.deserializeUser((id, done) => {
//     app.get('db').find_session_user([id])
//         .then((user) => {
//             return done(null, profile)
//         })
// })


///////////////////
//// EndPoints ////
///////////////////

//Auth endpoints
app.get('/auth/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/'
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user)
    }
})
// app.post('/auth/logout', authController.logout);
app.get('/auth/logout', authController.logout)

// Create Blog Message
app.post('/blog/messages', controller.createMes)

//Get Blog Messages
app.get('/blog/messages', controller.getMessages)

//Get Character Info
app.get('/books/characters', controller.getCharacters)

//Get World Info
app.get('/books/worldinfo', controller.getWorldInfo)

//Send Email
app.post('/contact/send', mailController.sendEmail)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`I'm listening on port: ${process.env.SERVER_PORT}.`)
})