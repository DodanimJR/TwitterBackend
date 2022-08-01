const Joi = require('joi')
const UserModel= Joi.object({
    authorId: Joi.number().integer().required(),
    Text: Joi.string().required(), 
})

module.exports={
    UserModel
}