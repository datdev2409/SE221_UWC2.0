const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUser);

router.post('/', userController.createUser);

router.delete('/:id', userController.removeUser);

router.patch('/:id', userController.updateUser);

module.exports = router
