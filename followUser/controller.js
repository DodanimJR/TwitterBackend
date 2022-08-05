const Followservices=require('./service')
const createFollowModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Follows=await Followservices.getAllFollows();
    res.json(Follows);
}

const create = async(req,res)=>{
    try {
        //const body = await createFollowModel.FollowModel.validate(req.body);
        const newFollow=await Followservices.createFollow(req.body);
        res.json({"Created Follow":newFollow}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await Followservices.UpdateFollow(req.body,id);
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
        const result = await Followservices.RemoveFollow(id);
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
        const result = await Followservices.getFollowById(id);
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