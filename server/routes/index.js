var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('./index.html', { root: __dirname})
})
console.log("asdfasdfsafd"+__dirname);
module.exports = router;