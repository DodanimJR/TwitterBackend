const Userservices=require('./service')
const createUserModel = require('./models');
const { response } = require('express');

const getAll = async(req,res)=>{
    Users=await Userservices.getAllUsers();
    res.json(Users);
}

const create = async(req,res)=>{
    try {
        //const body = await createUserModel.UserModel.validate(req.body);
        const newUser=await Userservices.createUser(req.body);
        res.json({"Created User":newUser}); 

    } catch (err) {
        console.log('=>CREATE=>ERROR',err);
        response.json({"error":err});
    }
}

const update = async(req,res)=>{
    try {
        const {id} = req.params;
        
        const result = await Userservices.UpdateUser(req.body,id);
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
        const result = await Userservices.RemoveUser(id);
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
        const result = await Userservices.getUserById(id);
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