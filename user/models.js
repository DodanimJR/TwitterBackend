const Joi = require('joi')
const UserModel= Joi.object({
    nombre: Joi.string().required(), 
})

module.exports={
    UserModel
}