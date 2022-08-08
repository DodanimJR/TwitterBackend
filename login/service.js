const { PrismaClient } = require('@prisma/client');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secretKey = "8ae350cc8b9ae710042d44353d7551f662a3b340a382e30b878670a5ec287a13e182d71aa9a1b93183b14bd742955b58b860f6c4b2b65c74a90d27bf683b5a50fae7344dbb004f3a954c00d689f1df0d4bdd5e4e339782759008591a893cfb7de8cb9b239de0b99815b2b68b129987a80893bbdea98e4ac6fb3a2b6fffaa68";
const prisma = new PrismaClient()

function generateAccessToken(username) {
    return jwt.sign(username, secretKey, { expiresIn: '1800s' });
  }

const login = async(req,res)=>{
    try {
        const params = req.body;
        
        const user = await prisma.User.findUnique({
            where:{
                email:params.email
            },
            include:{
                posts:true,
                followedBy:{
                    select:{
                        followerId:true
                    }
                },
                following:{
                    select:{
                        followingId:true
                    }
                }
            }
        });
        if(user){
            if(user.password==params.password){ 
                let token = generateAccessToken({username:user.username});
                user.token=token;
                delete user.password;
                res.json({"response":{
                    'user':user,
                }
            });
            }else{
                res.json({"response":"Incorrect Password"});
            }
        }
        else{
            res.json({"response":"No user found"});
        }
    } catch (error) {
        res.json({"response":JSON.stringify(error)});
        throw error
        
    }
}
module.exports = {
    login
}