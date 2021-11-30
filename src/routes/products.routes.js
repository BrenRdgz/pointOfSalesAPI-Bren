const { Router } = require('express');
const controllerProducts = require('../controllers/products.controller');
const routerProducts = Router();

routerProducts.get('/products', controllerProducts.getProducts);

routerProducts.post('/products', controllerProducts.addProduct);

module.exports = routerProducts;