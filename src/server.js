const express = require('express');
const connectionDB = require ('./db.connection');
const routerProducts = require('./routes/products.routes');
const routerSales = require('./routes/sales.routes')
const app = express();

connectionDB();
//settings

app.set("port", process.env.PORT);
app.use(function(req, res, next) {
    res.setTimeout(1000);
    next();
  });
app.use(cors());
app.use(express.json());
app.get('/', (req, res) =>{
    res.send('Hi');
});

app.use("/v1", routerProducts, routerSales);
module.exports = app;
