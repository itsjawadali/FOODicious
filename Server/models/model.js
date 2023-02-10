const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    CategoryName: String,
    name: String,
    img: String,
    options: Array,
    description: String
})


module.exports = mongoose.model('foodData', foodSchema)