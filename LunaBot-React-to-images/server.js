const express = require('express');
const server = express();

// route
server.all('/', (req, res) => {
  res.send('Your bot is active.')
})

function keepAlive() {
  server.listen(3000, () => {console.log("Server is Ready.")});
}
module.exports = keepAlive;