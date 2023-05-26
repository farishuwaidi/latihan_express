const express = require('express')
const router = express.Router()
const productRouter = require('../routes/products')
const kategoriRouter = require('../routes/kategori')

router.use('/products', productRouter)
router.use('/kategori', kategoriRouter)

module.exports = router