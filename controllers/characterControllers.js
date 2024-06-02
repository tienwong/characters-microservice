const mockData = require('../mockData/characters.json') // dummy data until database layer is implemented
const { assignIn } = require('lodash')

const Character = require('../models/Character')

const getByCharacterId = (characterId) => {
    return mockData.find(char => char.characterId === characterId)
}

const createNewCharacter = (username, seriesId, bio) => {
    const newCharacter = new Character(username, seriesId, bio)
    mockData.push(newCharacter)
}

const updateCharacter = (characterId, requestBody) => {
    const indexToBeUpdated = mockData.findIndex(char => char.characterId === characterId)
    // adds updated fields from the request body to the existing object
    assignIn(mockData[indexToBeUpdated], requestBody)
    console.log(`Updated mockData at index ${indexToBeUpdated}: ${mockData[indexToBeUpdated]}`)
}

const deleteCharacter = (characterId) => {
    mockData = mockData.filter(char => char.characterId !== characterId)
}

module.exports = {
    getByCharacterId,
    createNewCharacter,
    updateCharacter,
    deleteCharacter
}