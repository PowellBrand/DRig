const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer')
    , cors = require('cors')
    , dotenv = require('dotenv').config()
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , axos = require('axios');
const path = require('path');


const app = express();
app.use(express.static(`${__dirname}/../build`));
//Bring in the controllers
const authController = require('./controller/auth_controller')
const mailController = require('./controller/mail_controller')
const blogController = require('./controller/blog_controller')
const charWorldController = require('./controller/char_world_controller');

//bodyParser middleware from bodyparser github repo
app.use(bodyParser.json());
var jsonParser = bodyParser.json()

//--------------------END-------------------------//
app.use(cors());



massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);
}).catch(console.error);

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
        //logged to console for testing//
        // console.log(users)
        ///////////////////////////////
        if (!users[0]) {
            db.create_user([
                displayName,
                email,
                user_id,
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
passport.serializeUser((id, done) => {
    return done(null, id)
})
// passport.deserializeUser((profile, done) => {
//     return done(null, profile)
// })
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id])
        .then((user) => {
            return done(null, user[0])
        })
})


///////////////////
//// EndPoints ////
///////////////////

//Auth endpoints
app.get('/auth/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_REDIRECT,
    failureRedirect: process.env.REACT_APP_REDIRECT
}))
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('User not found');
    } else {
        res.status(200).send(req.user.admin)
    }
})
// app.post('/auth/logout', authController.logout);
app.get('/auth/logout', authController.logout)

// Create Blog Message
app.post('/blog/post', blogController.createMes)

//Get Blog Messages
app.get('/blog/messages', blogController.getMes)

//Get Landing message
app.get('/landing/message', blogController.getLand)

//Delete Blog Message
app.delete('/blog/delete/:id', blogController.deleteMes)

//Edit Blog Message
app.put('/blog/editPost/:id', blogController.editMes)

//Create Character Bio
app.post('/books/character/post', charWorldController.createChar)

//Delete Character Bio
app.delete('/books/delete/:id', charWorldController.deleteChar)

//Delete World
app.delete('/books/delete/world/:id', charWorldController.deleteWorld)

//Get Character Info
app.get('/books/characters', charWorldController.getCharBio)

//Create World Info
app.post('/books/worldinfo/post', charWorldController.createWorld)

//Get World Info
app.get('/books/worldinfo', charWorldController.getWorldInfo)

//Send Email
app.post('/contact/send', mailController.sendEmail)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`I'm listening on port: ${process.env.SERVER_PORT}.`)
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
