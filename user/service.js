const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');

const prisma = new PrismaClient()
const getAllUsers = async()=>{
    const Users = await prisma.User.findMany();
    for(User of Users){
        User.facultad= await prisma.Faculty.findUnique({where:{id:User.facultadId}})
        delete User.facultadId;
        delete User.facultad.id;
        delete User.facultad.nombre_decano;
        
    }
    return Users;
}
const createUser = async(bodys)=>{
    try {
        const params=bodys.value;
        const newUser =await prisma.User.create({
            data:{
                "nombre":params.nombre,
                "facultadId":params.facultadId,
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
        const User = await prisma.User.findUnique({where:{id:finalId}});
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