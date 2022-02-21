var express = require('express');
var router = express.Router();

/**GET users cool */
router.get('/', function(req, res, next) {
    res.send('Você é muito legal');
});

module.exports = router;