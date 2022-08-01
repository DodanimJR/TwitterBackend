const Postservices=require('./service')
const createPostModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Posts=await Postservices.getAllPosts();
    res.json(Posts);
}

const create = async(req,res)=>{
    try {
        
        console.log(req.body);
        const newPost=await Postservices.createPost(req.body);
        res.json({"Created Post":newPost}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await Postservices.UpdatePost(req.body,id);
        if(result){
            res.json({"response":result});
        }

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}
const remove = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await Postservices.RemovePost(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
}

const getbyId =async(req, res)=>{
    try {
        const {id} = req.params;
        const result = await Postservices.getPostById(id);
        if(result){
            res.json({"response":result});
    }
    } catch (error) {
        throw error
    }
    
}


module.exports={
    getAll,
    create,
    update,
    remove,
    getbyId,
}