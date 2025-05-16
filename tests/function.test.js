'use strict'

let employeeModel = require('../src/models/employeeModel')

describe('Test getPositions model', () => {
    test('should return a proper formatted response', async () => {
      
      let res = await employeeModel.getPositions()
      console.log(res)
      expect(typeof res).toBe('object');
    
    });
  
});

describe('Test getListByPosition model', () => {
    test('should return a proper formatted response', async () => {
      
      let res = await employeeModel.getListByPosition(1)
      expect(Array.isArray(res)).toBe(true);
    });

    test('should return empty array if position_id string', async () => {
      
        let res = await employeeModel.getListByPosition("abc")
        console.log(res)
        expect(res.length).toBe(0);
      });
      
      test('should return empty array if no position_id', async () => {
      
        let res = await employeeModel.getListByPosition()
        console.log(res)
        expect(res.length).toBe(0);
      });
});

  