const { PrismaClient } = require('@prisma/client');
var jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secretKey = process.env.TOKEN_SECRET;
const prisma = new PrismaClient()

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

const login = async(req,res)=>{
    try {
        const params = req.body;
        
        const user = await prisma.User.findUnique({
            where:{
                email:params.email
            }
        });
        if(user){
            if(user.password==params.password){ 
                let token = generateAccessToken({username:user.username});
                
                res.json({"response":{
                    "token":token,
                    "userId":user.id,
                    "userAvatar":user.avatar,
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