const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const { loginValidation } = require('../util/validation');

router.post('/login', async (req, res) => {
    let { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('E-Mail or password is wrong!');

    let passwordCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!passwordCorrect) return res.status(400).send('E-Mail or password is wrong!');

    let token = jwt.sign({ _id: user._id }, process.env.TOKEN);
    res.header('auth-token', token).send(token);

    res.send('logged in')
});

module.exports = router;