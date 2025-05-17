'use strict';

const jwt = require('jsonwebtoken');
const logger = require('../../utils/logger')

exports.verifyJWT = (req, res, next) => {
    try{
        const authHeader = req.headers['authorization'];
        if(!authHeader){
            logger.warn('Missing Authorization header', { path: req.path });
            return res.status(401).json({message:'Access Denied'})
        }

        const token = authHeader && authHeader.split(" ")[1];

        if(!token){
            logger.warn('Token not found in Authorization header');
            return res.status(401).json({message:'Access Denied'})
        }

        try{
            const jwtPayload = jwt.verify(token, process.env.JWT_SECRET)
            req.jwt = jwtPayload;
            next();
        }catch(err){
            logger.error('JWT verification failed', { error: err.message });
            return res.status(403).json({message: "Invalid token"})
        }
    }catch(err){
        logger.error({ error: err.message });
        throw err;
    }
}