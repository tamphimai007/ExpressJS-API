const express = require('express')
const router = express.Router();
// Controllers
const {
    create,
    list,
    read,
    update,
    remove } = require('../Controllers/product')

router.post('/product', create)
router.get('/product', list)
router.get('/product/:id', read)
router.put('/product/:id', update)
router.delete('/product/:id', remove)

module.exports = router