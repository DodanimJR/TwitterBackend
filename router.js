const express = require('express');
const routerUser = require('./user/router.js');

const router = express.Router();
router.use(express.json())



module.exports=router;