const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await prisma.User.findUnique({
            where:{
                email:email
            }
        });
        if(user.password==password){
            res.json({"response":"Login Successful"});
        }else{
            res.json({"response":"Login Failed"});
        }
    } catch (error) {
        throw error
    }
}