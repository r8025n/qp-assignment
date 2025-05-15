'use strict' 

const jwtMiddleware = require("../middleware/jwtMiddleware");
const employeeController = require('../controllers/employeeController');

const express = require("express");
const router = express.Router();

const baseRoute = "/employees"

router.get(baseRoute + '/positions', 
    employeeController.getPositions
)

router.get(baseRoute + '/',
    employeeController.employeeListByPosition
)

router.get(baseRoute + '/jwt-protected',
    jwtMiddleware.verifyJWT,
    employeeController.employeeListByPosition
)

module.exports = router;
