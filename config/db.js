const mongoose = require("mongoose");

module.export = mongoose.connect('mongodb://localhost:27017/ecommerce_api').then(()=>{
    console.log("Database is Successfully Connected")
}).catch((err)=>{
    console.log(err)
})