const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    res.render();
})

module.exports = router