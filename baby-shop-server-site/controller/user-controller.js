const { validationResult } = require('express-validator');

let users = [{
        email: 'abir@gmail.com',
        user: 'abir1',
    },
    {
        email: 'hasan@gmail.com',
        user: 'hasan',
    },
]

function allUser(req, res, next) {
    res.json(users);
}


function createUser(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        email,
        user
    } = req.body;
    users.push({
        email,
        user
    })
    return res.json([
        req.body,
        users
    ]);
}


function getUser(req, res, next){
    email = req.params.email; 
    let result = users.find(i=>i.email === email);
    return req.json(result).status(200);
}


function registerUser(req, res, next) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const {
        email,
        username,
        password
    } = req.body;

    users.push({
        email,
        username,
        password
    })

    return  res.status(200).json([
        req.body,
        users
    ])

}
exports.allUser = allUser;
exports.createUser = createUser;
exports.registerUser = registerUser;
exports.getUser = getUser;