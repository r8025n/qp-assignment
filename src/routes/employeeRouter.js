'use strict' 

const jwtMiddleware = require("../middleware/jwtMiddleware");
const employeeController = require('../controllers/employeeController');

const express = require("express");
const router = express.Router();

const baseRoute = "/employees"

router.get(baseRoute + '/positions',
    jwtMiddleware.verifyJWT, 
    employeeController.getPositions
)

router.get(baseRoute + '/',
    jwtMiddleware.verifyJWT,
    employeeController.employeeListByPosition
)

module.exports = router;
