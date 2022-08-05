const express = require('express');
const PostController = require('./controller')
const router = express.Router();
router.use(express.json())
router.get('/',PostController.getAll);
router.post('/',PostController.create);
router.get('/:id',PostController.getbyId);
router.delete('/:id',PostController.remove);
router.put('/:id',PostController.update);



module.exports=router;  