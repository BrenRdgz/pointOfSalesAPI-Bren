const { Router } = require('express');
const controllerSales = require('../controllers/sales.controller');
const routerSales = Router();

routerSales.post('/sales', controllerSales.saveSale);
routerSales.get('/sales', controllerSales.getSales);
routerSales.post('/sales/:id', controllerSales.updateSaleStatus);
routerSales.get('/sales/:id', controllerSales.getSaleById)

module.exports = routerSales;