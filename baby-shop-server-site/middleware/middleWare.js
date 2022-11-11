const jwt = require('jsonwebtoken')

const authMiddleWare = (req, res, next) => {
        try {
            let token = req.headers.authorization.split(' ')[1];
            // console.log(token);

            if (!token) {
                return res.json('user not authorized', 401);
            }
            const decodeToken = jwt.verify(token, 'do_not_share');
            req.userData = decodeToken;
            next();
        } catch (error) {
            return res.status(401).json('user not authorized');

        }
    }
        module.exports = authMiddleWare;