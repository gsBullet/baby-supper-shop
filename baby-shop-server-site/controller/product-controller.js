const {
    validationResult
} = require('express-validator');
const productModel = require('../Models/productModel');
const fs = require('fs-extra');
const path = require('path');


const allProducts = async (req, res, next) => {
    let products = await productModel.find()
        .populate('category')
        .populate('creator');
    return res.status(201).json(products);

}

async function createProducts(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
    } = req.body;

    let fileName = '';
    if (req.files) {
        // const images = req.files.image;
        // let imageName = images.name.split('.')[0];
        // let imageExtension = images.name.split('.')[1];

        // fileName ='uploads/'+imageName + '-' + parseInt(Math.random()*10000) + '.' + imageExtension;

        // const targetPath =path.join(__dirname,'../')+ "/" + fileName;
        // fs.move(images.path, targetPath, (err) => {
        //     console.log(err);
        // })
    }

    return res.json(req.files);

    let newProducts = await new productModel({
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
        image: fileName,
        creator: req.userData._id,
    }).save();

    res.status(201).json(newProducts);
}

const getProducts = async (req, res, next) => {
    let {
        id
    } = req.params;
    let products = await productModel.findOne({
            _id: id
        })
        .populate('category')
        .populate('creator');
    return res.status(200).json(products);
}

const updateProducts = async (req, res, next) => {
    const {
        id,
        title,
        parent
    } = req.body;
    let products = await productModel.updateOne({
        _id: id
    }, {
        title,
        parent
    });
    return res.status(200).json(products);
}
const deleteProducts = async (req, res, next) => {
    const {
        id,
    } = req.body;
    let products = await productModel.deleteOne({
        _id: id
    });
    if (products.deletedCount) {
        return res.status(200).json("delete Item");

    } else {

        return res.status(200).json({
            msg: 'does not delete Item',
            products
        });
    }
}


exports.createProducts = createProducts;
exports.allProducts = allProducts;
exports.getProducts = getProducts;
exports.updateProducts = updateProducts;
exports.deleteProducts = deleteProducts;