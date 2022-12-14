const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');

const prisma = new PrismaClient()
const getAllUsers = async()=>{
    const Users = await prisma.User.findMany({include:{posts:true,replys:true,followedBy:true,following:true}});
    for (User of Users){
        delete User['password']
    }
    return Users;
}

const getUserById = async(id)=>{
    try {
        const finalId= parseInt(id);
        console.log('consulta por id iniciada a db');
        const User = await prisma.User.findUnique({where:{id:finalId},include:{
            posts:{
                include:
                {author:true,replys:
                    {include:{author:true,originalPost:true}}}
        },followedBy:true,following:true,replys:{orderBy:{id:'desc'},include:{author:true,originalPost:{include:{author:true}}}}}});
        if(User!=null){
            delete User['password']
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
        console.log('llegamos al update',params);
        const finalId= parseInt(id);
        const User = await prisma.User.update({
            where:{id:finalId},
            data:{params}
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
    getAllUsers,
    getUserById,
    UpdateUser,
    RemoveUser,
    getUserById
}