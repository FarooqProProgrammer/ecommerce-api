const mongoose = require("mongoose");


const Ecommerce = mongoose.Schema(
    {
        title: {
            type:String,
            required:true,
        },
        price: {
            type:String,
            required:true,
        },
        description: {
            type:String,
            required:true,
        },
        category: {
            type:String,
            required:true,
        }, 
        image: {
            type:String,
            required:true,
        },
        slug: {
            type:String,
            required:true,
        },

        
    },
    { timestamps: true }
)

const EcommerceModel = mongoose.model('Ecommerce',Ecommerce)
module.exports = EcommerceModel