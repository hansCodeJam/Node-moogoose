const express = require('express');
const router = express.Router();
const users = require('../models/Users')
const userController = require('../controller/userController')

router.get('/', userController.getAllUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update/:id', userController.updateProfile);
router.delete('/delete/:id', userController.deleteProfile);

module.exports = router;