var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('wikiHomeLibrary');
})

router.get('/about', function (req, res) {
  res.send('aboutThisLibrary');
})

module.exports = router;
