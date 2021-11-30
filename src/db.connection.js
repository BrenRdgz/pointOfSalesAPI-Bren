const mongoose = require('mongoose');

const connectionDB = async () => {
    try{
        const DB = await mongoose.connect('mongodb+srv://3HCMq1UPAL1whKfR:3HCMq1UPAL1whKfR@brencluster.irzmg.mongodb.net/Products?retryWrites=true&w=majority');
    }catch (error){
        console.log(error);
    }  
}

module.exports = connectionDB;