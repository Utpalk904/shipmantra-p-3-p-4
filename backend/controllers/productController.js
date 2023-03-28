const Product = require('../models/productSchema');

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });

    } catch (error) {
        next(`Error: ${error}`);
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const productCount = await Product.countDocuments();
        const products = await Product.find();

        res.status(200).json({
            success: true,
            products,
            productCount
        });
    } catch (error) {
        console.log(error);
    }
}