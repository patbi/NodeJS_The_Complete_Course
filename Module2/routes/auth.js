const config = require('config');
const jwt = require('jsonwebtoken'); // update2
const Joi = require('joi');
const bcrypt = require('bcrypt'); //update
const _ = require('lodash');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
	const error = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Invalid email or password.');

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid email or password.');

	const token = jwt.sign({ _id: user._id }, config.get('jwtPrivateKey')); // update2

	res.send(token); // update2
});

function validate(req) {
	const schema = Joi.object({
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required()
	});

	return Joi.assert(req, schema);
}

module.exports = router;

