const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// const morgan = require('morgan') //image package
const server = express()
require('dotenv').config();
const uri = process.env.MONGO_LINK;
const User = require('./route/User');
const connection = mongoose.connection;

server.use('/route/uploads', express.static('route/uploads')) //use upload folder to save image

server.use(cors());
server.use(express.json());


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });
connection.once('open', () => console.log('-(MONGO-DB)-'))

server.use('/users', User);

if (process.env.NODE_ENV === 'production') {

  server.use(express.static('client/build'));
  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}


const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log("\u{1F525}\u{1F680} app listen on port",PORT,"\u{1F525}\u{1F680}");
})
