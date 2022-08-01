const { PrismaClient } = require('@prisma/client');
const _ = require('lodash');

const prisma = new PrismaClient()
const getAllPosts = async()=>{
    const Posts = await prisma.Post.findMany();
    return Posts;
}
const createPost = async(bodys)=>{
    try {
        const params=bodys;
        const newPost =await prisma.Post.create({
            data:{
                "authorId":params.authorId,
                "text":params.text,
            }
        });
        return newPost;
    } catch (error) {
        throw error
    }
}

const getPostById = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Post = await prisma.Post.findUnique({where:{id:finalId}});
        if(Post!=null){
            return Post;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const UpdatePost = async(params,id)=>{
    try {
        const finalId= parseInt(id);
        const Post = await prisma.Post.update({
            where:{id:finalId},
            data:{
                "nombre":params.nombre,
                "facultadId":params.facultadId,
            }
        });
        if(Post!=null){
            return Post;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

const RemovePost = async(id)=>{
    try {
        const finalId= parseInt(id);
        const Post = await prisma.Post.delete({where:{id:finalId}});
        if(Post!=null){
            return Post;
        }else{
            return("NOT FOUND")
        }
        
    } catch (error) {
        return("ERROR- NOT A VALID CHARACTER",id)
    }
}

module.exports={
    createPost,
    getAllPosts,
    getPostById,
    UpdatePost,
    RemovePost,
    getPostById
}