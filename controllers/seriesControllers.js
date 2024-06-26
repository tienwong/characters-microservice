const mockData = require('../mockData/characters.json') // Mock data until I set up database layer

const getBySeriesId = (seriesId) => {
    return mockData.filter(char => char.seriesId === Number(seriesId))
}

module.exports = {
    getBySeriesId
}