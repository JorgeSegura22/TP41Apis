const express = require('express');
const router = express.Router();

const controllerMovies= require("../../controllers/apiController/moviesController.js")



router.post('/api',controllerMovies.create)
router.post('/api/:id',controllerMovies.delete)
router.put('/api/update/:id', controllerMovies.update);


module.exports=router