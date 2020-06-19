const router = require('express').Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/User')
router.use(cors())

process.env.SECRET_KEY = 'secret'

router.get('/', (req, res) => {
  User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error: ' + err))
})

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if(user) {
      if(bcrypt.compareSync(req.body.password, user.password)) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          phone_number: user.phone_number,
          age: user.age,
          gender: user.gender,
          ethnicity: user.ethnicity,
          marital_status: user.marital_status,
          file: user.file
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 1440 })
        res.send(token)
      } else { res.json({ error: 'User does not exist' })}
    } else { res.json({ error: 'User does not exist' }) }
  }).catch(err => { res.send('error: ' + err) })
})

router.post('/register', (req, res) => {
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    phone_number: req.body.phone_number,
    age: req.body.age,
    gender: req.body.gender,
    ethnicity: req.body.ethnicity,
    marital_status: req.body.marital_status,
    file: req.body.file,
    created: new Date()
  }

  User.findOne({ email: req.body.email })
  .then(user => {
    if(!user) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        userData.password = hash
        User.create(userData)
        .then(user => {
          res.json({ user })
        }).catch(err => { res.send('error: ' + err) })
      })
    } else { res.json({ error: 'User already exists' }) }
  }).catch(err => { res.send('error: ' + err) })
})
router.post('/userupdate/:id', (req, res) => {
  User.findById(req.params.id)
  .then(user => {
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;
    user.phone_number = req.body.phone_number;
    user.age = req.body.age;
    user.gender = req.body.gender;
    user.ethnicity = req.body.ethnicity;
    user.marital_status = req.body.marital_status;
    user.file = req.body.file;

    user.save()
    .then(() => res.json('updated'))
    .catch(err => res.status(400).json('Error: could not updated ' + err));
  })
  .catch(err => res.status(400).json('Error: server crashed ' + err))
})





// router.delete('/:id', (req, res) => {
//   User.findByIdAndDelete(req.params.id)
//     .then(() => res.json('user deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router
