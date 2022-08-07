const Replyservices=require('./service')
const createReplyModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Replys=await Replyservices.getAllReplys();
    res.json(Replys);
}

const create = async(req,res)=>{
    try {
        
        console.log(req.body);
        const newReply=await Replyservices.createReply(req.body);
        res.json({"Created Reply":newReply}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await Replyservices.UpdateReply(req.body,id);
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
        const result = await Replyservices.RemoveReply(id);
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
        const result = await Replyservices.getReplyById(id);
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