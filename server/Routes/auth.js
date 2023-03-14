const express = require('express')
const router = express.Router();



router.get('/auth', (req, res) => {
    // code
    console.log('hello routes auth')
    res.send("hello Routes auth")
})

module.exports = router