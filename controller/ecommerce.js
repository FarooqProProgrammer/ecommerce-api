const EcommerceModel = require("../model/ecommerce");

class Ecommerce {
    static async AddProduct(req,res) {
        try {
            const {
                title,
                price,
                description,
                category,
                image,
                slug
            } = req.body;


            const Ecommerce = EcommerceModel({
                title,
                price,
                description,
                category,
                image,
                slug
            }) 

            await Ecommerce.save();

            res.send({"Message":"Product Save Success"})
        }catch(err) {
            res.send(err)
        }
    }
    static async getProduct(req,res) {
        try {

            const product = await EcommerceModel.find();
            res.send(product)
        }catch(err) {
            res.send(err)
        }
    }
}

module.exports = {
    Ecommerce
}