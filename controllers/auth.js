const bcrypt = require('bcryptjs');

const User = require('../models/User');


module.exports.login = async function(req, res) {
  // res.status(200).json({
  //   login: {
  //     email: req.body.email,
  //     password: req.body.password
  //   }
  // })
  const candidate = await User.findOne({ email: req.body.email });

  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);

    if (passwordResult) {
      //generate token
    } else {
      res.status(401).json({
        message: 'Password mismatch, try again',
      })
    }

  } else {
    res.status(404).json({
      message: 'Email not found',
    })
  }
}

module.exports.register = async function(req, res) {
  // res.status(200).json({
  //   register: 'from controller',
  // })

  // const user = new User({
  //   email: req.body.email,
  //   password: req.body.password
  // })
  // user.save().then(() => console.log('User saved'));
  const candidate = await User.findOne({
    email: req.body.email
  })

  if  (candidate) {
    // user already exists
    res.status(409).json({ 
      message: 'Email already exists, try another one.'
    })
  } else {
    // create new user
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt)
      })

      try {
        await user.save()
        res.status(201).json(user)
      } catch (err) {
        // err
      }
  }
}