const { Schema, model } = require('mongoose');

const SaleSchema = new Schema ({
    date:{
        type: Date,
        required: true
    }, 
    total: {
        type:Number,
        required:true},
    isCancelled:{type:Boolean, 
        default:false},
    products:[]
});

module.exports = model ("Sales", SaleSchema);