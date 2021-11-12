var express = require('express');
var router = express.Router();

const {productos, productosId}= require ('../controllers/apis')

/* GET api page. */
router.get('/productos', productos) 
router.get('/productos/:id', productosId) 


module.exports = router;
