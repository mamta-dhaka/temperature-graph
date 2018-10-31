var express = require('express')
const cron = require('node-cron');
var DataService = require('../services/data.service');

var router = express.Router()
var data = require('./api/data.route');

cron.schedule("* * * * *", async function() {
    console.log("running a task every minute");
    var data = {
        deviceSerialNumber: Math.random().toString(36).substring(7),
        temperature: Math.floor((Math.random() * 200) + 1),
        date: new Date(),
    };
    try{
        var createdData = await DataService.createData(data)
            .then((data) => console.log('data created successfully by scheduler', data));
    }catch(e){
        return console.log('>>>>>>', 'error occured', e);
    }
});

router.use('/data', data);


module.exports = router;
