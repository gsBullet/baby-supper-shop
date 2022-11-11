const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: {
        required: true,
        type: "string",
    },
     parent: {
        default: 'none',
        type: "string",
    },
     creator: {
        type: "string"
    },
    
    
},{
    timestamps: true
})

const categoryModel = mongoose.model('categoryModel',categorySchema);
module.exports = categoryModel;