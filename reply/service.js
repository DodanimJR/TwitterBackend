const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');
const { param } = require('./router');

const prisma = new PrismaClient()
const getAllReplys = async()=>{
    const Replys = await prisma.Reply.findMany({include:{author:true}});
    return Replys;
}
const createReply = async(bodys)=>{
    try {
        const params=bodys;
        console.log(params);
        const newReply =await prisma.Reply.create({
            data:{
                "authorId":params.authorId,
                "PostId":params.postId,
                "text":params.text
                
            }
        });
        return newReply;
    } catch (error) {
        throw error
    }
}

const getReplyById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Reply = await prisma.Reply.findUnique({where:{id:finalId},include:{author:true}});
        if(Reply!=null){
            return Reply;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdateReply = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Reply = await prisma.Reply.update({
            where:{id:finalId},
            data:{
                likes:{increment:1}
            }
        }); 
        if(Reply!=null){
            return Reply;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemoveReply = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Reply = await prisma.Reply.delete({where:{id:finalId}});
        if(Reply!=null){
            return Reply;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createReply,
    getAllReplys,
    getReplyById,
    UpdateReply,
    RemoveReply,
    getReplyById
}