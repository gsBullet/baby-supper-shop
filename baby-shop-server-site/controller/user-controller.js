const {
    validationResult
} = require('express-validator');
const userModel = require('../models/modelUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


let users = [{
        email: 'abir@gmail.com',
        username: 'abir1',
    },
    {
        email: 'hasan@gmail.com',
        username: 'hasan',
    },
]

async function allUser(req, res, next) {
    let dbUsers = await userModel.find();
    res.json(dbUsers).status(201);
}


async function createUser(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        email,
        username,
        password
    } = req.body;

    let newUser = await new userModel({
        email,
        username,
        password
    }).save();

    return res.json([
        req.body,
        newUser
    ]);
}


async function getUser(req, res, next) {
    id = req.params.id;
    let user = await userModel.findById(id);
    return res.status(200).json({
        user,
        data: req.userData
    });
}
async function checkUser(req, res, next) {
    id = req.userData._id;
    let user = await userModel.findById(id);
    return res.status(200).json({
        username: user.username,
        email: user.email,
        role: user.role,
        phone: user.phone
    });
}

async function loginUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    email = req.body.email;
    password = req.body.password;
    let user = await userModel.findOne({
        email
    }).exec();
    if (user) {
        // console.log(user);
        let checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
            const {
                email,
                password,
                role,
                username,
                phone,
                _id
            } = user;
            let token = await jwt.sign({
                email,
                username,
                _id
            }, 'do_not_share');
            return res.status(200).json({
                email,
                password,
                role,
                phone,
                token
            });
        } else {
            let errors = {
                errors: [{
                    param: 'password',
                    msg: 'password does not match'
                }],
                msg: 'validation error'
            };
            return res.status(422).json(errors);
        }
    } else {
        return res.status(404).json("user not found");

    }
}

function deleteUser(req, res, next) {
    email = req.params.email;
    let index = users.findIndex(i => i.email === email);
    users.splice(index, 1);
    return res.status(201).json(users);
}


async function registerUser(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    const {
        username,
        email,
        password
    } = req.body;

    let hashPassword = await bcrypt.hash(password, 10);

    let newUser = await new userModel({
        email,
        username,
        password: hashPassword
    }).save();

    let token = await jwt.sign({
        email,
        username,
        _id: newUser._id
    }, 'do_not_share');

    return res.status(201).json({
        email,
        username,
        role: newUser.role,
        token
    });

}
exports.allUser = allUser;
exports.createUser = createUser;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.checkUser = checkUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;