const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../dist/week4tut'));
console.log(__dirname);

const http = require("http").Server(app);
const PORT = 3000;
const server = http.listen(PORT, function(){
  console.log("Server listening on port " + PORT);
});

app.get('/api/auth', function(req, res){
  res.sendFile(__dirname + '/../dist/week4tut/index.html');
})