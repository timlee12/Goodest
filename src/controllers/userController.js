const User = require('../models/userModel');

const userController = {};

userController.getUser = (req, res, next) => {
  const { user } = req.params;

  User.find({ username: user })
    .then(data => {
      console.log('requested user data: ', data)
      res.locals.user = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'userController.getUsers',
        message: { err: 'request to get users failed' }
      })
    })
}

userController.createUser = (req, res, next) => {
  User.find({ username: req.body.username })
    .then(data => {
      console.log('does username already exist? ', data.length > 0)
      console.log(data)

      if(data.length > 0) {
        return next({
          log: 'userController.createUser',
          message: { err: 'username already exists' }
        })
      }

      User.create({ username: req.body.username, password: req.body.password })
        .then(data => {
          console.log('creating user!');
          res.locals.newUser = data;
          console.log(data);
          return next();
        })    
      })
    .catch(err => {
      return next({
        log: 'userController.createUser',
        message: { err: 'something went wrong in userController.createUser' }
      })
    })
};

// userController.updateUser = (req, res, next) => {
//   const { username, animalType, description, profilePic } = req.body;

//   User.findOneAndUpdate({ username: username }, {
//     profile: {
//       animalType: animalType,
//       description: description,
//       profilePic: profilePic
//     }
//   }, { new: true })
//     .then(data => {
//       console.log(data)
//       res.locals.updatedUser = data;
//       return next();
//     })
// };

userController.validateUser = (req, res, next) => {
  User.find({ username: req.body.username, password: req.body.password })
    .then(data => {
      if(!data[0]) {
        return next({
          log: 'userController.validateUser',
          message: { err: 'username and password combination not found. try again' }
        })
      }
      
      console.log('user data', data)
      console.log('is data an array: ', Array.isArray(data))

      if(data[0].username === req.body.username && data[0].password === req.body.password) {
        console.log('account found! logging in...');
          
        res.locals.validatedUser = data[0];
        return next();
      }
    })
    .catch(err => {
      return next({
        log: 'userController.validateUser',
        message: { err: 'an error occured when validating user. try again' }
      })
    })
}

module.exports = userController;