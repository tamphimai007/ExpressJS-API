const express = require('express')
const mongoose = require('mongoose')
// 3 ประสาน Middleware
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const { readdirSync } = require('fs')
const connectDB = require('./Config/db')


// Routes
// const authRoutes = require('./Routes/auth')
// const productRoutes = require('./Routes/product')


// app
const app = express();

// db
connectDB()

// middleware
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "10mb" }))
app.use(cors())

// Route 1
app.get('/register', (req, res) => {
    // code
    console.log("hello register")
    res.send("ฝากกดติดตามด้วยนะครับ")
})
// Route 2
// app.use('/api', authRoutes)
// app.use('/api', productRoutes)
// Route 3
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)))



app.listen(5000,
    () => console.log('Server is running on port 5000'))
