'use strict';

const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({message:'Access Denied'})
        }

        try{
            const jwtPayload = jwt.verify(token, process.env.JWT_SECRET)
            req.jwt = jwtPayload;
            next();
        }catch(err){
            console.log(err)
            return res.status(403).json({message: "Invalid token"})
        }
    }catch(err){
        // log err
        throw err;
    }
}