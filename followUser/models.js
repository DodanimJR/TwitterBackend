const Joi = require('joi')
const UserModel= Joi.object({
    username: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
})

module.exports={
    UserModel
}