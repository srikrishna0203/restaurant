let mongoose = require('mongoose')
let model = mongoose.Schema({
    "name":String,
    "phone":Number,
    "email":String,
    "date":Date,
    "Address":String
})
module.exports = mongoose.model('customer',model)