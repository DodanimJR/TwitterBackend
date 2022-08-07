const express = require('express');
const signupController = require('./service')
const router = express.Router();

router.post('/',signupController.signup);

module.exports=router;  