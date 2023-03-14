const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String,
        require: true
    },
    price: {
        type: Number,
    },
    remark: {
        type: String,
        default: 'Product Popular'
    }
}, { timestamps: true })

module.exports = mongoose.model('Products', productSchema)