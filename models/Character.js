const crypto = require('crypto')

class Character {
    constructor(username, seriesId, bio) {
        this.username = username
        this.seriesId = seriesId
        this.bio = bio || ''
        this.posts = []
        this.characterId = crypto.randomUUID()
    }

    setBio(bio) {
        this.bio = bio
    }

    addPost(post) {
        this.posts.push(post)
    }

    deletePost(post) {
        this.posts = this.posts.filter(p => p.postId !== post.postId)
    }
}

module.exports = Character