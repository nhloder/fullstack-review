require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authControler.js')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

// TOP LEVEL MIDDLEWARE \\
app.use(express.json())
app.use(session({
   resave:false,
   saveUninitialized:false,
   secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
   app.set('db', db)
   app.listen(SERVER_PORT, () =>
   console.log(`${SERVER_PORT} Homies on the block`)
   )
})

// ENDPOINTS \\
app.post('/auth/register',authCtrl.register)
app.post('/auth/login', authCtrl.login)
