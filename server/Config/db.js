const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // code
        await mongoose.connect('mongodb://127.0.0.1:27017/product')
        console.log('Connected DB')
    } catch (err) {
        // err
        console.log(err)
    }
}

module.exports = connectDB