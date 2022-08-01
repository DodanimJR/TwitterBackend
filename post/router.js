const express = require('express');
const PostController = require('./controller')
const router = express.Router();
router.use(express.json())
router.get('/',PostController.getAll);
router.post('/',PostController.create);
router.get('/:id',PostController.getbyId);



module.exports=router;  