    const express = require('express');
    const authMiddleWare = require('../middleware/middleWare');
    const router = express.Router();
    const categoryController = require('../controller/category-controller')

    router.use(authMiddleWare);


    router.get('/all', categoryController.allCategory)
    router.post('/create', categoryController.createCategory)

    router.get('/get/:id', (req, res) => {
      res.json('read user');
    })
    router.post('/update/:id', (req, res) => {
      res.json('update user');
    })

    router.get('/delete/:id/:name', (req, res) => {
      // console.log(req);
      res.json('delete user' + ' ' + req.params.id + ' ' + req.params.name);
    })

    module.exports = router;