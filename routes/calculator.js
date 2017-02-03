var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('bodys/calculator', { title: 'Training site' });
});

module.exports = router;
