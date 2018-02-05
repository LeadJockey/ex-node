const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('index home');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('index about');
});

module.exports = router;