    const express = require('express')
    const router = express.Router();

    
    router.get('/all', (req, res) => {
    res.json('All products');
    })
    router.post('/create', (req, res) => {
      res.json('create user');
    })
  
    router.get('/get/:id', (req, res) => {
      res.json('read user');
    })
    router.post('/update/:id', (req, res) => {
      res.json('update user');
    })
  
    router.get('/delete/:id/:name', (req, res) => {
      // console.log(req);
      res.json('delete user'+ ' '+ req.params.id+' ' + req.params.name);
    })  

    module.exports = router;