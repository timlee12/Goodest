const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/:user', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user)
});

router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser)
});

router.post('/login', userController.validateUser, (req, res) => {
  return res.status(200).send(res.locals.validatedUser);
});

// router.patch('/details', userController.updateUser, (req, res) => {
//   return res.status.send(res.locals.updatedUser);
// })

module.exports = router;