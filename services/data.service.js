var Data = require('../models/data.model')
_this = this

exports.getData = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var data = await Data.paginate(query, options)
        return data;

    } catch (e) {
        throw Error('Error while Paginating data')
    }
}

exports.createData = async function(data){
    var newData = new Data({
        temperature: data.temperature,
        deviceSerialNumber: data.deviceSerialNumber,
        date: new Date(),
    })
    try{
        var savedData = await newData.save()

        return savedData;
    }catch(e){
        throw Error("Error while Creating data")
    }
}
