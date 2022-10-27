const express = require('express');
const router = express.Router();
const {
    body
} = require('express-validator');
const userController = require('../controller/user-controller');
const userModel = require('../models/modelUser');

router.get('/all', userController.allUser);

router.post('/create',
    // username must be an email
    body('email')
    .normalizeEmail()
    // .isEmpty().withMessage('Email is empty')
    .isEmail().withMessage('Email is empty'),


    // password must be a least 5 chars long
    body('username')
    .not().isEmpty().isLength({
        min: 5
    }),
    userController.createUser
)

router.get('/get/:email', userController.getUser);

router.post('/update/:id', (req, res) => {
    res.json(users);
})

router.get('/delete/:id', userController.deleteUser);


router.post('/register',
    [
        // username must be an email
        body('email')
        .normalizeEmail()
        // .isEmpty().withMessage('Email is empty')
        .isEmail().withMessage('Email is empty')
        .custom((value,{req})=>{
            userModel.findOne({
                    email: value
                })
                .then(res=>{
                    if(res){
                        // throw new Error('Email is already exits');
                    }
                })
        }).withMessage('Email is already exits'),


        // username must be a least 5 chars long
        body('username')
        .not().isEmpty().withMessage('username is required')
        .isLength({
            min: 5
        }),



        // password must be a least 4 chars long
        body('password')
        .not().isEmpty().withMessage('password is required')
        .isLength({
            min: 4
        }).withMessage('minmum length 5 character'),

        body('repassword').custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('Password does not match');
            }
            return true;
        })
    ],
    userController.registerUser);

module.exports = router;