const express = require('express');
const StudentController = require('./controller')
const router = express.Router();

router.get('/',StudentController.getAll);
router.post('/',StudentController.create);
router.get('/:id',StudentController.getbyId);
router.delete('/:id',StudentController.remove);
router.put('/:id',StudentController.update);




module.exports=router;  