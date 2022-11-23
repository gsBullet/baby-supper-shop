    const express = require('express');
    const authMiddleWare = require('../middleware/middleWare');
    const router = express.Router();
    const categoryController = require('../controller/category-controller')

    router.use(authMiddleWare);


    router.get('/all', categoryController.allCategory);
    router.post('/create', categoryController.createCategory);

    router.get('/get/:id', categoryController.getCategory);

    router.post('/update', categoryController.updateCategory)

    router.post('/delete', categoryController.deleteCategory)

    module.exports = router;