const express = require('express');
const LoginController = require('./service')
const router = express.Router();

router.post('/',LoginController.login);

module.exports=router;  