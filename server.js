const express = require('express')
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const server = express()
require('dotenv').config();
const uri = process.env.MONGO_LINK;
const User = require('./route/User');
const connection = mongoose.connection;
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
  console.log(`Server listening on port ${PORT}`)
})
