var express = require('express');
var router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const upload = multer(multerConfig.config).single(multerConfig.keyUpload);
const product_controller = require('../controllers/products');

router.get('/', product_controller.getProduct)

router.get('/:id', product_controller.getProductById)

router.put('/:id', upload, product_controller.updateProduct)

router.post('/', upload, product_controller.createProduct)

router.delete('/:id', product_controller.deleteProduct)

module.exports = router;
