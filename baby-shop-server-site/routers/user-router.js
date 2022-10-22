const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controller/user-controller')

router.get('/all', userController.allUser);

router.post('/create',
 // username must be an email
 body('email')
 .not()
 .isEmpty().withMessage('Email is empty')
 .isEmail().withMessage('Not email type'),
 // password must be a least 5 chars long
 body('user')
 .not()
 .isEmpty()
 .isLength({ 
    min: 5 }),
userController.createUser
)

router.get('/get/:email', userController.getUser);

router.post('/update/:id', (req, res) => {
    res.json(users);
})

router.get('/delete/:id', (req, res) => {
    res.json(users);
})

router.post('/register',

    userController.registerUser
);

module.exports = router;