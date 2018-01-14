const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, nodemailer = require('nodemailer')
, cors = require('cors')
, controller = require('./controller/controller')
, dotenv = require('dotenv').config()
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0');


const app = express();
const authController = require('./controller/auth_controller')
app.use(bodyParser.json());
//bodyParser middleware from bodyparser github repo
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//--------------------END-------------------------//
app.use(cors());



massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db);

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
}, function(accessToken, refreshToken, extraParams, profile, done){

    const db = app.get('db');

    db.users.find_user([profile.id]).then((profile)=> {
        console.log(profile)
        if(!profile[0]){
            db.users.add_user([
                profile.id,
                profile.name.givenName,
                profile.name.familyName
            ]).then(user => {
                return done(null, user[0].id)
            })
        } else {
            return done(null, profile[0].id)
        }
    })

}))
//---End Strategy---//

//serialize and deserialize the user
passport.serializeUser((profile, done)=> {
    return done(null, profile)
})
passport.deserializeUser((profile, done)=> {
    return done(null, profile)
})
    
})
///////////////////
//// EndPoints ////
///////////////////

//Auth endpoints
app.get('/auth/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/',
    failureRedirect: '/'
}))

// Create Blog Message
app.post('/blog/messages', controller.createMes)

//Get Blog Messages
app.get('/blog/messages', controller.getMessages)

//Get Character Info
app.get('/books/characters', controller.getCharacters)

//Get World Info
app.get('/books/worldinfo', controller.getWorldInfo)

//Send Email
app.post('/contact/send', controller.sendEmail)

app.listen(process.env.PORT, ()=> {
    console.log(`I'm listening on port: ${process.env.PORT}.`)
})