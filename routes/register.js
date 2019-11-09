const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation } = require('../util/validation');

router.post('/register', async (req, res) => {
    let { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let emailExisting = await User.findOne({ email: req.body.email });
    if (emailExisting) return res.status(400).send('E-Mail already exists!');

    let salt = await bcrypt.genSalt(10);
    let passwordHashed = await bcrypt.hash(req.body.password, salt);

    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwordHashed
    });
    try {
        let savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;