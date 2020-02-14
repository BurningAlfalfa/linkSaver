require('./mongoHandler')


const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.post("/save-url", (req, res) => {
    //let { email: value } = req.body;
    console.log(req.body)
    mint()
});
app.get('/tokens/:tokenID', (req, res) => {
  
})
const {mint} = require('./mint')

