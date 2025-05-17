const request = require("supertest");
const app = require("../app.js");
const jwt = require('jsonwebtoken');

const jwtToken = jwt.sign(
    { userId: 123, name: 'Alice Johnson', role: 'admin' },
    'S9k4$eJ82!vm&xU7qPLz*A!dj28fQzYx', // secret used to SIGN
    { expiresIn: '1h' }
  );

describe('Test positions API', () => {
    test("should return a proper formatted response", async () => {
        const res = await request(app)
        .get('/employees/positions')
        .set("Authorization",`Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('qp_status');
        expect(res.body.qp_status).toBe(1000)
        expect(res.body).toHaveProperty('positions');
        expect(typeof res.body.positions).toBe('object');
        expect(res.body.positions).not.toBeNull();
      });
})

describe('Test employee list by positionId API', () => {
    test("should return a proper formatted response", async () => {
        const res = await request(app)
        .get('/employees?position_id=1')
        .set("Authorization",`Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('qp_status');
        expect(res.body.qp_status).toBe(1000)
        expect(res.body).toHaveProperty('employeeList');
        expect(Array.isArray(res.body.employeeList)).toBe(true);
        expect(res.body.employeeList).not.toBeNull();
      });

      test("should return status 1003 if position_id is string", async () => {
        const res = await request(app)
        .get("/employees?position_id='1'")
        .set("Authorization",`Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('qp_status');
        expect(res.body.qp_status).toBe(1003)
      });

      test("should return status 1003 if position id missing", async () => {
        const res = await request(app)
        .get('/employees')
        .set("Authorization",`Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('qp_status');
        expect(res.body.qp_status).toBe(1003)
        expect(res.body).not.toHaveProperty('employeeList');
      });
})

describe('Test JWT authorized api', () => {
    test("should be authorized if jwt is present", async () => {
        const res = await request(app)
        .get('/employees?position_id=1')
        .set("Authorization",`Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('qp_status');
        expect(res.body.qp_status).toBe(1000)
      });

      test("status code should be 401 if jwt missing", async () => {
        const res = await request(app)
        .get('/employees?position_id=1')
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(401);
      });

      test("status code should be 403 if invalid jwt", async () => {
        const res = await request(app)
        .get('/employees?position_id=1')
        .set("Authorization",`Bearer ${jwtToken}abc`)
        .set('Accept', 'application/json')
        
        expect(res.statusCode).toBe(403);
      });
})
