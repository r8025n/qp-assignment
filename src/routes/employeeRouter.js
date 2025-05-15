'use strict' 

// const authorizationMiddleware = require("")
const employeeController = require('../controllers/employeeController');

const express = require("express");
const router = express.Router();

const baseRoute = "/employees"

router.get(baseRoute + '/positions', 
    employeeController.getPositions
)

router.get(baseRoute + '/',
    // middleware,
    employeeController.employeeListByPosition
)

module.exports = router;
