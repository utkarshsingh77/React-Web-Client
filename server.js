const express = require("express");
const axios = require('axios')
var cors = require('cors')
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

const config = {
    headers: {
        'x-api-key': process.env.AWS_API_GATEWAY_API_KEY,
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Headers':'Content-Type, x-api-key, Access-Control-Allow-Origin,Authorization,X-Requested-With',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Credentials':'true'
    }
}
app.post('/api/email', (req, res) => {
    axios.post('https://vkjm4vx818.execute-api.us-east-1.amazonaws.com/test/email-submit', {email: req.body.email}, config)
        .then((data) => {
            res.end()
        })
        .catch((err) => {
            console.error(err)
            res.end()
        }
)

})

app.listen(5000, "localhost", (e) => {
    console.log('listening on port 5000');
});