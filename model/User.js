const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: Number,
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  ethnicity: {
    type: String
  },
  marital_status: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users', UserSchema)
