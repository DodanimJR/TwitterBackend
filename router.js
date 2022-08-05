const express = require('express');
const routerUser = require('./user/router.js');
const routerPost = require('./post/router.js');
const routerFollowUser = require('./followUser/router.js');

const router = express.Router();
router.use(express.json())
router.use('/user',routerUser);
router.use('/post',routerPost);
router.use('/follow',routerFollowUser);



module.exports=router;