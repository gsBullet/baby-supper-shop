const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    title: {
        required: true,
        type: "string",
    },
     category: {
        require:true,
        type: mongoose.Types.ObjectId,
        default: "none",
        ref: "categoryModel"

    },
     price: {
        require: true,
        type: 'number',
        default: 0,
    },
    discount:{
        type:'number',
        default:0,
    },
    discount_price:{
        type:'number',
        default:0,
    }, 
    discount_date:{
        type:'date',
    },
     image:{
        required: true,
        type:'string',
    },
    description:{
        required: true,
        type:'string',
    },
    creator:{
        type: mongoose.Types.ObjectId,
        ref: 'userModel'
    }
    
},{
    timestamps: true
})

const productModel = mongoose.model('productModel',productSchema);
module.exports = productModel;