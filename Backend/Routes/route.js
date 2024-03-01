let express = require('express')
let {getdata,storedata} = require('../Controller/controller')
let route = new express.Router()
route.get('/get',getdata)
route.post('/store',storedata)
module.exports = route