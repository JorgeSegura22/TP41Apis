const express = require('express');
const router = express.Router();
const controller= require("../../controllers/apiController/genresController.js")
const controllerMovies= require("../../controllers/apiController/moviesController.js")


router.get('/api',controller.list)
router.get('/api/:id',controller.detail)
router.post('/api',controllerMovies.create)
router.post('/api/:id',controllerMovies.delete)


module.exports=router