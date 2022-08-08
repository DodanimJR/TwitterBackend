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
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

dotenv.config();
const secretKey = "8ae350cc8b9ae710042d44353d7551f662a3b340a382e30b878670a5ec287a13e182d71aa9a1b93183b14bd742955b58b860f6c4b2b65c74a90d27bf683b5a50fae7344dbb004f3a954c00d689f1df0d4bdd5e4e339782759008591a893cfb7de8cb9b239de0b99815b2b68b129987a80893bbdea98e4ac6fb3a2b6fffaa68";
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