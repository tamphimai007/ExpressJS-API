// Model
const Products = require('../Models/Product')

// Controllers
exports.create = async (req, res) => {
    try {
        // code
        console.log(req.body)
        const newProducts = await new Products(req.body).save()
        res.json(newProducts)

    } catch (err) {
        // err
        console.log(err)
        res.status(400).send('Server Create Error')
    }
}
exports.list = async (req, res) => {
    try {
        // code
        const listProducts = await Products.find({}).exec()
        res.json(listProducts)
    } catch (err) {
        // err
        console.log(err)
        res.status(400).send('Server list Error')
    }
}
exports.read = async (req, res) => {
    try {
        // code
        console.log(req.params.id)
        const id = req.params.id
        const readProduct = await Products.findOne({ _id: id }).exec()
        res.json(readProduct)

    } catch (err) {
        // err
        console.log(err)
        res.status(400).send('Server Read Error')
    }
}
exports.update = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const updateProduct = await Products
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec()

        res.json("update success")
    } catch (err) {
        // err
        res.status(400).send('Server Update Error')
    }
}

exports.remove = async (req, res) => {
    try {
        // code
        const id = req.params.id
        const deleteProduct = await Products
            .findByIdAndDelete({ _id: id })
            .exec()
        res.send("Delete Success")

    } catch (err) {
        // err
        res.status(400).send("Server delete Error")
    }
}