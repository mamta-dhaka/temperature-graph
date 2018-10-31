var express = require('express')

var router = express.Router()

var DataController = require('../../controllers/data.controller');


// Map each API to the Controller FUnctions

router.get('/', DataController.getData);

router.post('/', DataController.createData);
// router.post('/automatedData', DataController.createDataEveryFiveMinutes);

module.exports = router;
