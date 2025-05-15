"use strict"

const express = require("express")
const router = express.Router();
const employeeRoutes = require('./employeeRouter')

router.use('', employeeRoutes);

module.exports = router;