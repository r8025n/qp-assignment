'use strict';

const employeeModel = require('../models/employeeModel')

exports.getPositions = async(req, res) => {
    try{
        const finalResponse = {
            qp_status: 1000
        }

        let positions = await employeeModel.getPositions()
        res.send(positions)
    }catch(err){
        // log error
        res.send({qp_status: 2000}) // common error status
    }
}

exports.employeeListByPosition = async(req, res) => {
    try{
        const finalResponse = {
            qp_status: 1000
        }

        let positionId = req.query.position_id;

        if(! positionId){
            finalResponse.qp_status = 1003; // necessary field missing

        }
        
        let employeeList = await employeeModel.getListByPosition(positionId);

        res.send(employeeList);
    }catch(err){
        // log error
        res.send({qp_status: 2000})
    }
}