var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/response-test', (req, res) => {
    res.send('response received');
});

module.exports = router;
