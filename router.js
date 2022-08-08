var { expressjwt: jwt } = require("express-jwt");
const express = require('express');
const routerUser = require('./user/router.js');
const routerPost = require('./post/router.js');
const routerFollowUser = require('./followUser/router.js');
const routerReply = require('./reply/router.js');
const routerLogin = require('./login/router.js');
const routerSignup = require('./signup/router.js');
const dotenv = require('dotenv');
var cors = require('cors')
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

dotenv.config();
const secretKey = process.env.TOKEN_SECRET;
const router = express.Router();
router.use(cors(corsOptions))
router.use(express.json())
router.use(
    jwt({
        secret: secretKey,
        algorithms: ["HS256"],
      })
    .unless(({path: ['/login','/signup']})));
router.use('/login',routerLogin)
router.use('/signup',routerSignup)
router.use('/user',routerUser);
router.use('/post',routerPost);
router.use('/follow',routerFollowUser);
router.use('/reply',routerReply);




module.exports=router;