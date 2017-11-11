const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: "it worked mf'er dude why not working on browser?"
    })

})

app.post('/register', (req, res) => {
    res.send({
        message: "it worked mf'er dude why now ?? working on browser?"
    })

})




app.listen(process.env.PORT || 8081)
