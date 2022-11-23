const express = require('express');
const router = express.Router();
const {
    body
} = require('express-validator');
const {
    Error
} = require('mongoose');
const userController = require('../controller/user-controller');
const userModel = require('../models/modelUser');
const authMiddleWare = require('../middleware/middleWare')




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

router.post('/register',
    [
        // username must be an email
        body('email')
        .normalizeEmail()
        .isEmail().withMessage('Email is empty')
        .custom(async (value, {
            req
        }) => {
            let emailUser = await userModel.findOne({
                email: value
            })
            if (emailUser) {
                return Promise.reject('Email is already exists')
            }
        }).withMessage('Email is already exists'),


        // username must be a least 5 chars long
        body('username')
        .not().isEmpty().withMessage('username is required')
        .isLength({
            min: 3
        }).withMessage('minimun length 3 character')
        .custom(async (value, {
            req
        }) => {
            let user = await userModel.findOne({
                username: value
            })
            if (user) {
                return Promise.reject('user already exists')
            }
        }).withMessage('user already exists'),



        // password must be a least 3 chars long
        body('password')
        .not().isEmpty().withMessage('password is required')
        .isLength({
            min: 3
        }).withMessage('minmum length 3 character'),

        body('repassword').custom((value, {
            req
        }) => {
            if (value !== req.body.password) {
                throw new Error('Password does not match');
            }
            return true;
        })
    ],
    userController.registerUser);

router.post('/login',
    [
        // username must be an email
        body('email')
        .normalizeEmail()
        .isEmail().withMessage('Email is empty')
        .custom(async (value, {
            req
        }) => {
            let user = await userModel.findOne({
                email: value
            })
            if (!user) {
                return Promise.reject('Email is not found')
            }
        }).withMessage('Email is not found'),

        // password must be a least 3 chars long
        body('password')
        .not().isEmpty().withMessage('password is required')
        .isLength({
            min: 3
        }).withMessage('minmum length 3 character'),

    ],
    userController.loginUser);


router.use(authMiddleWare);

router.get('/check-user', userController.checkUser);

router.get('/get/:id', userController.getUser);

router.post('/update/:id', (req, res) => {
    res.json(users);
})

router.get('/delete/:id', userController.deleteUser);



module.exports = router;