const app = require('./app')
const request = require('supertest')

describe('app', () => {
    describe('GET /', () => {
        it('should return 200 when series is provided in query parameters, and at least one character is associated with that series', async () => {
            const res = await request(app).get('/?series=someSeries')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(200)
        })

        it('should return 400 when a series is not provided in query parameters', async () => {
            const res = await request(app).get('/')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(400)
        })

        it('should return 404 when a series is provided but no characters are associated with it', async () => {
            const res = await request(app).get('/?series=invalidSeries')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(404)
        })
    })
})