const express = require('express');
const routerUser = require('./user/router.js');
const routerPost = require('./post/router.js');
const routerFollowUser = require('./followUser/router.js');
const routerReply = require('./reply/router.js');
const routerLogin = require('./login/router.js');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(express.json())
router.use(
    expressJwt({
        secret: 'secretKey',
        algorithms: ['HS256'],
    }
).unless(({path: ['/login','/signup']})));
router.use('/login',routerLogin)
router.use('/user',routerUser);
router.use('/post',routerPost);
router.use('/follow',routerFollowUser);
router.use('/reply',routerReply);




module.exports=router;