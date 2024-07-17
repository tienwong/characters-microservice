const mockData = require('../mockData/characters.json') // Mock data until I set up database layer
const CharacterModel = require('../models/Character')

const getBySeriesId = async (seriesId) => {
    // commented out because we will test this as soon as we can figure out if the post even works
/*     const query = await CharacterModel.find({ seriesId: seriesId }).exec()
    const results = []
    query.then((docs) => {
        docs.forEach(d => {
            results.push(d)
        })
    }) */
    return mockData.filter(char => char.seriesId === seriesId)
}

module.exports = {
    getBySeriesId
}