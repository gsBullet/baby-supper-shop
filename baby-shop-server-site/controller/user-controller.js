const { validationResult } = require('express-validator');
const userModel = require('../models/modelUser');
const bcrypt = require('bcryptjs');
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


function getUser(req, res, next){
    email = req.params.email; 
    let result = users.find(i=>i.email === email);
    return res.json(result).status(200);
}

function deleteUser(req, res, next){
    email = req.params.email; 
    let index = users.findIndex(i=>i.email === email);
    users.splice(index,1);
    return res.json(users).status(200);
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

    let hashPassword = await bcrypt.hash(password,10);

    let newUser = await new userModel({
        email,
        username,
        password: hashPassword
    }).save();
    
    return  res.status(201).json(newUser);

}
exports.allUser = allUser;
exports.createUser = createUser;
exports.registerUser = registerUser;
exports.getUser = getUser;
exports.deleteUser = deleteUser;