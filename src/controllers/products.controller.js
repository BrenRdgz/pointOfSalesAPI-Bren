const Product = require('../models/product');

async function addProduct(req, res){
    try{
        const {
            name, 
            price
        }=req.body;
        const product = Product({
            name,
            price
        });
        const productStored = await product.save();
        res.status(201).send({ productStored })
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function getProducts(req, res){
    const products = await Product.find().lean().exec()
    res.status(200).send({products})
}

module.exports={
    addProduct,
    getProducts
}