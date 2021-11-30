const Sale = require('../models/sale');

async function saveSale(req, res){
    try{
        const {
            date, 
            total,
            products
        }=req.body;
        const sale = Sale({
            date,
            total,
            products
        });
        const saleStored = await sale.save();
        res.status(201).send({ saleStored })
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function getSales(req, res){
    const sales = await Sale.find();
    res.status(200).send({sales})
}
async function updateSaleStatus(req,res){
    try{
        const id = req.params.id;
        const saleCancelled = await Sale.findByIdAndUpdate(id,{$set:{isCancelled:true}});
    
     res.status(201).send("sale Cancelled")
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function getSaleById(req, res){
    try{
        const id=req.params.id;
        const sale = await Sale.findById(id);
        res.status(200).send({sale})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}
module.exports={
    saveSale,
    getSales,
    updateSaleStatus,
    getSaleById
}