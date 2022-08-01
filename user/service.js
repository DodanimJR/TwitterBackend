const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');

const prisma = new PrismaClient()
const getAllUsers = async()=>{
    const Users = await prisma.User.findMany({include:{posts:true}});
    return Users;
}
const createUser = async(bodys)=>{
    try {
        const params=bodys.value;
        const newUser =await prisma.User.create({
            data:{
                "name":params.nombre,
            }
        });
        return newUser;
    } catch (error) {
        throw error
    }
}

const getUserById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const User = await prisma.User.findUnique({where:{id:finalId},include:{posts:true}});
        if(User!=null){
            return User;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateUser = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const User = await prisma.User.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "facultadId":params.facultadId,
            }
        });
        if(User!=null){
            return User;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveUser = async(id)=>{
    try {
        const finalId= parseInt(id);
        const User = await prisma.User.delete({where:{id:finalId}});
        if(User!=null){
            return User;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createUser,
    getAllUsers,
    getUserById,
    UpdateUser,
    RemoveUser,
    getUserById
}