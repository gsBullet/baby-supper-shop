    const express = require('express');
    const router = express.Router();
    const productController = require('../controller/product-controller')

    const {
      check
    } = require('express-validator');
    const authMiddleWare = require('../middleware/middleWare');

    router.use(authMiddleWare);

    router.get('/all', productController.allProducts);
    router.post('/create',
    [
      check('title')
      .not().isEmpty().withMessage('title is required'),

      check('price')
      .not().isEmpty().withMessage('price is required'),

      check('category')
      .not().isEmpty().withMessage('category is required'),

      check('image')
      .custom((value, {req,res,next})=>{
        
        if(req.files.image.size == 0){
            return Promise.reject('image field is required');
        }
        else{
          return true
        }
      }),

       check('description')
      .not().isEmpty().withMessage('description is required'),
      
    ], productController.createProducts);

    router.get('/get/:id', productController.getProducts);
    router.post('/update/:id', productController.updateProducts);

    router.get('/delete/:id/:name', productController.deleteProducts);

    module.exports = router;