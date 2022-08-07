const express = require('express');
const ReplyController = require('./controller')
const router = express.Router();

router.get('/',ReplyController.getAll);
router.post('/',ReplyController.create);
router.get('/:id',ReplyController.getbyId);
router.delete('/:id',ReplyController.remove);
router.put('/:id',ReplyController.update);



module.exports=router;  