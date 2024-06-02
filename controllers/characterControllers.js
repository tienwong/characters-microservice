const mockData = require('../mockData/characters.json') // dummy data until database layer is implemented

const Character = require('../models/Character')

const getByCharacterId = (characterId) => {
    return mockData.find(char => char.characterId === characterId)
}

const createNewCharacter = (username, seriesId) => {
    const newCharacter = new Character(username, seriesId)
    mockData.push(newCharacter)
    console.log(mockData)   // for debugging
}

module.exports = {
    getByCharacterId,
    createNewCharacter
}