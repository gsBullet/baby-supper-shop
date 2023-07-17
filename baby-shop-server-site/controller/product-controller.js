const {
    validationResult
} = require('express-validator');
const productModel = require('../Models/productModel');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment');
const {
    uploadFile
} = require('./helper-controller');


const allProducts = async (req, res, next) => {
    let products = await productModel.find()
        .populate('category')
        .populate('creator');

        products = await products.map(product=>{
            let today = new moment();
            let product_discount_date =  moment(product.discount_date);
            let diff = product_discount_date.diff(today,'days');
            if(diff<=0){
                product.discount_date =null,
                product.discount_price = null,
                product.discount = null
            }
            return product;
        });
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

    let imageList = [];
    let thumb_image = [];
    if (req.files) {
        thumb_image = uploadFile(req.files.thumb_image,'uploads/products')
        const images = req.files.related_image;
        images.forEach(image => {
            imageList.push(
                uploadFile(image, 'uploads/products')
            )
        });

    }
    // console.log(imageList);
    // return res.json([req.files.image, imageList]);

    let newProducts = await new productModel({
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
        thumb_image: thumb_image,
        related_image: imageList,
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
        .populate('creator')
    return res.status(200).json(products);
}
async function updateProducts(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        _id,
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
    } = req.body;

    let product = await productModel.findById(_id);

    let imageList = [];
    let thumb_image = product.thumb_image;
    if (req.files) {
        if(req.files?.thumb_image?.size){

            thumb_image = uploadFile(req.files.thumb_image,'uploads/products')
        }

        const images = req.files.related_image;
        if(images.length){
            images.forEach(image => {
                imageList.push(uploadFile(image,'uploads/products')
                )
            });
        }
        else{
            imageList=[...product.related_image];
        }
    }

    let updatedProducts = await productModel.updateOne({
        _id
    },{
        title,
        category,
        price,
        discount,
        discount_price,
        discount_date,
        description,
        thumb_image:thumb_image,
        related_image: imageList,
        creator: req.userData._id,
    });

    res.status(201).json(updatedProducts);
}
// const updateProducts = async (req, res, next) => {
//     const {
//         id,
//         title,
//         parent
//     } = req.body;
//     let products = await productModel.updateOne({
//         _id: id
//     }, {
//         title,
//         parent
//     });
//     return res.status(200).json(products);
// }
const deleteProducts = async (req, res, next) => {
    const {
        id,
    } = req.body;
    let products = await productModel.deleteOne({
        _id:id
    });
    if (products.deletedCount) {
        return res.status(200).json("delete Item");

    } else {

        return res.status(400).json({
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