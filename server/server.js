const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);


app.use(express.static(path.join(__dirname + '/../dist/week4tut/')));
app.use(bodyparser.json());
app.use(cors());


const PORT = 3000;
const server = http.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log("Server running on " + PORT);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/auth', (req, res) => {
  // Logic goes here
});

