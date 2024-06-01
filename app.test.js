const app = require('./app')
const request = require('supertest')

const mockCharactersBasePath = '/1/characters'

describe('/series', () => {
    describe('GET /:seriesId', () => {
        it('should return 200 when at least one character is associated with the provided seriesId', async () => {
            const res = await request(app).get('/series/1')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(200)
        })

        it('should return 404 when a series is provided but no characters are associated with it', async () => {
            const res = await request(app).get('/series/asldfkd')
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(404)
        })
    })
})

describe('/characters', () => {
    describe('GET /:characterId', () => {
        it('should return 200 if the character with the specified characterId can be found', async () => {
            const res = await request(app).get(`/characters/1`)
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(200)
        })
        it('should return 404 if no character with that characterId exists', async () => {
            const res = await request(app).get(`/characters/sdfldsjlkfjd`)
            expect(res).toBeTruthy()
            expect(res.statusCode).toBe(404)
        })
    })
})