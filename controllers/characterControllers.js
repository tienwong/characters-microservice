const crypto = require('crypto')

const CharacterModel = require('../models/Character')

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

const createNewCharacter = async (username, seriesId, bio) => {
    let result = null
    if (!username || !seriesId) {
        return result
    }
    const newCharacter = new CharacterModel({
        characterId: crypto.randomUUID(),
        username,
        seriesId,
        bio: bio || '',
        posts: []
    })

    await newCharacter.save()
        .then((doc) => {
            result = doc
        })
        .catch((err) => {
            console.log(err)
        })
    
    return result
}

const updateCharacter = async (characterId, requestBody) => {
    let result = null
    await CharacterModel.findOneAndUpdate(
        // query
        {
            characterId
        },
        // what we want to update it to
        {
            characterId,
            ...requestBody
        },
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
        console.log(`Character id ${response.characterId} was deleted successfully`)
        result = true
    })
    .catch((err) => {
        console.log(err)
    })
    return result
}

module.exports = {
    getByUsername,
    createNewCharacter,
    updateCharacter,
    deleteCharacter
}