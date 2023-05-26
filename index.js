const productController = require('./src/controller/products')
const express = require('express')
const mainRouter = require('./src/routes/index')
const app = express()
const port = 3000

app.use(express.json());

app.use('/', mainRouter)

app.listen(port,()=> {
    console.log(`http://localhost:${port}`)
})