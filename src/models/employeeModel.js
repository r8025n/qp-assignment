'use strict'

const {positions, employees} = require('./employees')

exports.getPositions = async () => {
    try{
        return positions;
    }catch(err){
        throw err;
    }
}

exports.getListByPosition = async (positionId) => {
    try{
        let response = [];
        positionId = Number(positionId)

        for(let item of employees){
            if(item.positionId == positionId){
                response.push(item)
            }
        }

        return response;
    }catch(err){
        throw err;
    }
}