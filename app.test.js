const app = require('./app')
const request = require('supertest')

describe('/:seriesId/characters', () => {
    describe('GET /', () => {
        it('should return 200 when at least one character is associated with the provided seriesId', async () => {
            const res = await request(app).get('/1/characters')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(200)
        })

        it('should return 404 when a series is provided but no characters are associated with it', async () => {
            const res = await request(app).get('/asdlfdkf/characters')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(404)
        })
    })
})