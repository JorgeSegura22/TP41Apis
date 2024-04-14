const express = require('express');
const router = express.Router();
const controller= require("../../controllers/apiController/actorsController.js")



router.get('/api',controller.list)
router.get('/api/:id',controller.detail)
router.post('/api',controller.create)
router.post('/api/:id',controller.delete)
router.put('/api/update/:id', controller.update);



module.exports=router