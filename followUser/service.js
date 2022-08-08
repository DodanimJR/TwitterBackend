const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');

const prisma = new PrismaClient()
const getAllFollows = async()=>{
    const Follows = await prisma.Follows.findMany({include:{follower:true,following:true}});
    return Follows;
}
const createFollow = async(bodys)=>{
    try {
        const params=bodys;
        console.log(bodys);
        
        const newFollow =await prisma.Follows.create({
            data:{
                "followerId":params.followerId,
                "followingId":params.followingId,
            }
        });
        return newFollow;
    } catch (error) {
        throw error
    }
}

const getFollowById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Follow = await prisma.Follows.findUnique({where:{id:finalId},include:{follower:true,following:true}});
        if(Follow!=null){
            return Follow;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateFollow = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Follow = await prisma.Follows.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "facultadId":params.facultadId,
            }
        });
        if(Follow!=null){
            return Follow;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveFollow = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Follow = await prisma.Follows.delete({where:{id:finalId}});
        if(Follow!=null){
            return Follow;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createFollow,
    getAllFollows,
    getFollowById,
    UpdateFollow,
    RemoveFollow,
    getFollowById
}