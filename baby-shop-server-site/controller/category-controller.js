const {
    validationResult
} = require('express-validator');
const categoryModel = require('../Models/categoryModel');

 const  allCategory = async(req, res, next) => {
    let categories = await categoryModel.find();
    return res.status(200).json(categories);
 }

async function createCategory(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        title,
        parent
    } = req.body;

    let newCategory = await new categoryModel({
        title,
        parent,
        creator: req.userData._id,
    }).save();

    return res.json(newCategory);
}


exports.createCategory = createCategory;
exports.allCategory = allCategory;