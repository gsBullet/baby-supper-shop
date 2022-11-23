const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: {
        required: true,
        type: "string",
    },
     
     parent: {
        // type: "string"
        type: mongoose.Types.ObjectId,
        default: "none",
        ref: "categoryModel"

    },
     creator: {
        // type: "string"
        type: mongoose.Types.ObjectId,
        ref: 'userModel'
    }  
    
},{
    timestamps: true
})

const categoryModel = mongoose.model('categoryModel',categorySchema);
module.exports = categoryModel;