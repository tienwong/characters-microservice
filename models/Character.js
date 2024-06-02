const crypto = require('crypto')

class Character {
    constructor(username, seriesId) {
        this.username = username
        this.seriesId = seriesId
        this.bio = ''
        this.posts = []
        this.characterId = crypto.randomUUID()
    }

    get username() {
        return this.username
    }

    get bio() {
        return this.bio
    }

    set bio(text) {
        this.bio = text
    }

    get posts() {
        return this.posts
    }

    addPost(post) {
        this.posts.push(post)
    }

    deletePost(post) {
        this.posts = this.posts.filter(p => p.postId !== post.postId)
    }
}

module.exports = Character