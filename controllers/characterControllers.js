const crypto = require('crypto')

const CharacterModel = require('../models/Character')

const getByCharacterId = async (characterId) => {
    let searchResult = null
    await CharacterModel.findOne({
        characterId
    })
    .then((doc) => {
        searchResult = doc
    })
    .catch((err) => {
        console.log(err)
    })
    return searchResult
}

const getByUsername = async (username) => {
    let searchResult
    await CharacterModel.findOne({
        username
    })
    .then((doc) => {
        searchResult = doc
    })
    .catch((err) => {
        console.log(err)
    })
    return searchResult || null
}

const createNewCharacter = (username, seriesId, bio) => {
    if (!username || !seriesId) {
        return false
    }
    const newCharacter = new CharacterModel({
        characterId: crypto.randomUUID(),
        username,
        seriesId,
        bio: bio || '',
        posts: []
    })

    newCharacter.save()
        .then((doc) => {
            // For debugging
            console.log('Successfully saved to the Character database.')
        })
        .catch((err) => {
            console.log(err)
            return false
        })
    
    return true
}

const updateCharacter = async (characterId, requestBody) => {
    let result = null
    await CharacterModel.findOneAndUpdate(
        // query
        {
            characterId
        },
        // what we want to update it to
        requestBody,
        {
            new: true   // return updated doc
        }
    )
    .then((doc) => {
        result = doc
    })
    .catch((err) => {
        console.log(err)
    })
    return result
}

const deleteCharacter = async (characterId) => {
    let result = false
    await CharacterModel.findOneAndDelete({
        characterId
    })
    .then((response) => {
        console.log(response)
        result = true
    })
    .catch((err) => {
        console.log(err)
    })
    return result
}

module.exports = {
    getByCharacterId,
    getByUsername,
    createNewCharacter,
    updateCharacter,
    deleteCharacter
}