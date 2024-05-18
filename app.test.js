const app = require('./app')
const request = require('supertest')

describe('app', () => {
    describe('GET /', () => {
        it('should return 200', async () => {
            const res = await request(app).get('/')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(200)
        })
    })
})