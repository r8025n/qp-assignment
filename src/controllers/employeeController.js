'use strict';

const employeeModel = require('../models/employeeModel')
const logger = require('../../utils/logger')

exports.getPositions = async(req, res) => {
    try{
        const finalResponse = {
            qp_status: 1000
        }

        finalResponse.positions = await employeeModel.getPositions()
        res.send(finalResponse)
    }catch(err){
        logger.error({ error: err.message });
        res.send({qp_status: 2000}) // common error status
    }
}

exports.employeeListByPosition = async(req, res) => {
    try{
        const finalResponse = {
            qp_status: 1000
        }

        let positionId = Number(req.query.position_id);

        if(! positionId){
            finalResponse.qp_status = 1003; // necessary field missing
            res.send(finalResponse)
        }
        
        finalResponse.employeeList = await employeeModel.getListByPosition(positionId);

        res.send(finalResponse);
    }catch(err){
        logger.error({ error: err.message });
        res.send({qp_status: 2000})
    }
}