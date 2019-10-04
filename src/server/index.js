const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

