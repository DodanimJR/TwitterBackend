const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const createUser = async(bodys)=>{
    try {
        const params=bodys;
        console.log(bodys);
        const newUser =await prisma.User.create({
            data:{
                "username":params.username,
                "name":params.name,
                "email":params.email,
                "password":params.password,      
            }
        });
        return newUser;
    } catch (error) {
        throw error
    }
}
const signup = async(req,res)=>{
    try {
        //const body = await createUserModel.UserModel.validate(req.body);
        console.log(req.body);
        const newUser=await createUser(req.body);
        res.json({"Created User":newUser},201); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

module.exports = {
    signup
}