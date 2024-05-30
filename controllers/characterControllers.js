const mockData = require('../mockData/characters.json') // Mock data until I set up database layer

const getByCharacterId = (characterId) => {
    console.log('inside getByCharacterId')
    return mockData.find(char => char.characterId === Number(characterId))
}

module.exports = {
    getByCharacterId
}