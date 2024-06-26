const app = require('./app')
const request = require('supertest')

describe('/series', () => {
    describe('GET /:seriesId', () => {
        it('should return 200 when at least one character is associated with the provided seriesId', async () => {
            await request(app).get('/series/1').expect(200)
        })

        it('should return 404 when a series is provided but no characters are associated with it', async () => {
            await request(app).get('/series/asldfkd').expect(404)
        })
    })
})

describe('/characters', () => {
    describe('GET /:characterId', () => {
        it('should return 200 if the character with the specified characterId can be found', async () => {
            await request(app).get(`/characters/42970896-e305-4f88-b9d5-d3fb1978c937`).expect(200)
        })
        it('should return 404 if no character with that characterId exists', async () => {
            await request(app).get(`/characters/sdfldsjlkfjd`).expect(404)
        })
    })
    describe('GET /byUsername/:username', () => {
        it('should return 200 if the character with the specified username can be found', async () => {
            await request(app).get(`/characters/byUsername/pinkiepiebestpony`).expect(200)
        })
        it('should return 404 if no character with that username exists', async () => {
            await request(app).get(`/characters/byUsername/sdfldsjlkfjd`).expect(404)
        })
    })
    describe('POST /', () => {
        it('should return 200 if the addition of the character to the database was successful', async () => {
            const goodPayload = {
                username: 'crayoneater123',
                seriesId: 1
            }
            await request(app).post('/characters/').send(goodPayload).expect(200)
        })
        it('should return 400 if the data in the request body was missing required fields', async () => {
            const payloadWithNoUsername = {
                seriesId: 1,
                bio: 'i am a malformed data'
            }
            await request(app).post('/characters').send(payloadWithNoUsername).expect(400)
        })
    })
    describe('PUT /:characterId', () => {
        it('should return 200 if the modification of the character was successful', async () => {
            const payload = {
                username: 'bartsimpson',
                seriesId: 1,
                bio: 'eat my shorts',
                posts: []
            }
            await request(app).put('/characters/42970896-e305-4f88-b9d5-d3fb1978c937').send(payload).expect(200)
        })
        it('should return 404 if the characterId was not found', async () => {
            await request(app).put('/characters/alsdjflkdlfd').send({ username: 'test', bio: 'test time'}).expect(404)
        })
    })
    describe('DELETE /:characterId', () => {
        it('should return 200 if the deletion of the character was successful', async () => {
            await request(app).delete('/characters/42970896-e305-4f88-b9d5-d3fb1978c937').expect(200)
        })
        it('should return 404 if the characterId was not found', async () => {
            await request(app).delete('/characters/alsdjflkdlfd').expect(404)
        })
    })
})