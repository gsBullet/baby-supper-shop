const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title: {
        required: true,
        type: "string",
    },
     
     parent: {
        // type: "string"
        type: mongoose.Types.ObjectId,
        // default: "none",
        ref: "category"

    },
     creator: {
        // type: "string"
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }  
    
},{
    timestamps: true
})

const categoryModel = mongoose.model('category',categorySchema);
module.exports = categoryModel;