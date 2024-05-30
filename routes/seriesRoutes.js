const express = require('express')
const { getBySeriesId } = require('../controllers/seriesControllers')

const router = express.Router()

router.get('/:seriesId', (req, res) => {
    const characters = getBySeriesId(req.params.seriesId)
    if (characters.length === 0) {
        res.status(404).json({
            error: "No characters were found with the specified series ID."
        })
    }
    res.status(200).json({
        characters
    })
})

module.exports = router