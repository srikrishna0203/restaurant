let customer = require('../Model/model')
let getdata = (req,res)=>{
    customer.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({"err":err})
    })
}
let storedata = (req,res)=>{
    let data = new customer(req.body)
    data.save().then(()=>{
        res.json({"msg":"stored"})
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports = {getdata,storedata}