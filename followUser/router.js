const express = require('express');
const FollowController = require('./controller')
const router = express.Router();

router.get('/',FollowController.getAll);
router.post('/',FollowController.create);
router.get('/:id',FollowController.getbyId);
router.delete('/:id',FollowController.remove);



module.exports=router;  