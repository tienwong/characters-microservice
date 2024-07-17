const mongoose = require('mongoose')

const characterSchema = {
    characterId: String,
    username: String,
    seriesId: String,
    bio: String,
    posts: Array
}

module.exports = mongoose.model('Character', characterSchema)