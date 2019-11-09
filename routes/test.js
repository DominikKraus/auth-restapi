const router = require('express').Router();
const private = require('./verify');

router.get('/test', private, (req, res) => {
    res.send('wow youre logged in');
});

module.exports = router;