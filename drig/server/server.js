const express = require('express')
, massive = require('massive')
, bodyParser = require('body-parser')
, cors = require('cors')
, controller = require('./controller/controller')
, dotenv = require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());



massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
})
///////////////////
//// EndPoints ////
///////////////////

// Create Blog Message
app.post('/blog/messages', controller.createMes)

//Get Blog Messages
app.get('/blog/messages', controller.getMessages)

app.listen(process.env.PORT, ()=> {
    console.log(`I'm listening on port: ${process.env.PORT}.`)
})