var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var DataSchema = new mongoose.Schema({
    temperature: Number,
    deviceSerialNumber: String,
    date: Date,
});

DataSchema.plugin(mongoosePaginate);
const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
