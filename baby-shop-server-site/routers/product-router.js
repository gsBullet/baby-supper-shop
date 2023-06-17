    const express = require('express');
    const router = express.Router();
    const productController = require('../controller/product-controller')

    const {
      check
    } = require('express-validator');
    const authMiddleWare = require('../middleware/middleWare');

    router.use(authMiddleWare);

    router.get('/list', productController.allProducts);



    router.get('/all', productController.allProducts);
    router.post('/create',
    [
      check('title')
      .not().isEmpty().withMessage('title is required'),

      check('price')
      .not().isEmpty().withMessage('price is required'),

      check('category')
      .not().isEmpty().withMessage('category is required'),

      check('thumb_image')
      .custom((value, {req,res,next})=>{
        
        if(req.files.thumb_image.size == 0){
            return Promise.reject('Thumb Image field is required');
        }
        else{
          return true
        }
      }),

       check('description')
      .not().isEmpty().withMessage('description is required'),
      
    ], productController.createProducts);

    router.get('/get/:id', productController.getProducts);

    router.post('/update',
    [
      check('title')
      .not().isEmpty().withMessage('title is required'),

      check('price')
      .not().isEmpty().withMessage('price is required'),

      check('category')
      .not().isEmpty().withMessage('category is required'),


       check('description')
      .not().isEmpty().withMessage('description is required'),
      
    ], productController.updateProducts);

    router.post('/delete', productController.deleteProducts);

    module.exports = router;