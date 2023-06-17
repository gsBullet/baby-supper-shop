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
        ref: "category"

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
    thumb_image:{
        required: true,
        type:'string',
    },
    related_image:{
        type:'array',
    },
    description:{
        required: true,
        type:'string',
    },
    creator:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }
    
},{
    timestamps: true
})

const productModel = mongoose.model('productModel',productSchema);
module.exports = productModel;