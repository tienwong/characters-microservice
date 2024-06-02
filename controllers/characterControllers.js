const mockData = require('../mockData/characters.json')

const Character = require('../models/Character')

const getByCharacterId = (characterId) => {
    return mockData.find(char => char.characterId === characterId)
}

const createNewCharacter = (username, seriesId) => {
    const newCharacter = new Character(username, seriesId)
    mockData.push(newCharacter)
}

module.exports = {
    getByCharacterId,
    createNewCharacter
}