const express = require('express');
let router = express.Router();

router.use('/test',require('./route'));
router.use('/session',require('./session'));


module.exports=router