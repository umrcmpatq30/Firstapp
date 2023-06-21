const express = require('express');
const app = express();
const fs= require('fs');
const path = require('path');
const bodyParser = require('body-parser');


const router = express.Router();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname ,'views/index.html'));
}   
);


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
    }   
);