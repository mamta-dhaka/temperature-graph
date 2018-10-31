var DataService = require('../services/data.service')

_this = this


exports.getData = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    console.log(page, limit)

    try{
        var data = await DataService.getData({}, page, limit)
        return res.status(200).json({status: 200, data: data, message: "Succesfully data Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}


exports.createData = async function(req, res, next){
    var data = {
        deviceSerialNumber: req.body.deviceSerialNumber,
        temperature: req.body.temperature,
        date: new Date(),
    };

    try{
        var createdData = await DataService.createData(data);
        return res.status(201).json({status: 201, data: createdData, message: "Succesfully Created Data Entry"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Data Creation was Unsuccesfull"})
    }
}
