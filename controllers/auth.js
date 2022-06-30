const User = require('../models/User');


module.exports.login = function(req, res) {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password
    }
  })
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
  }
}