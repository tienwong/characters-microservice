const mockData = require('../mockData/characters.json') // dummy data until database layer is implemented
const { assignIn, remove } = require('lodash')

const Character = require('../models/Character')

const getByCharacterId = (characterId) => {
    return mockData.find(char => char.characterId === characterId)
}

const getByUsername = (username) => {
    return mockData.find(char => char.username === username)
}

const createNewCharacter = (username, seriesId, bio) => {
    if (!username || !seriesId) {
        return false
    }
    const newCharacter = new Character(username, seriesId, bio)
    mockData.push(newCharacter)
    return true
}

const updateCharacter = (characterId, requestBody) => {
    const indexToBeUpdated = mockData.findIndex(char => char.characterId === characterId)
    if (indexToBeUpdated === -1) {
        return false
    }
    // adds updated fields from the request body to the existing object
    assignIn(mockData[indexToBeUpdated], requestBody)
    return true
}

const deleteCharacter = (characterId) => {
    const removedElements = remove(mockData, char => char.characterId === characterId)
    return removedElements.length !== 0
}

module.exports = {
    getByCharacterId,
    getByUsername,
    createNewCharacter,
    updateCharacter,
    deleteCharacter
}