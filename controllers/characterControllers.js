const mockData = require('../mockData/characters.json')

const getByCharacterId = (characterId) => {
    return mockData.find(char => char.characterId === characterId)
}

module.exports = {
    getByCharacterId
}