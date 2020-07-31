# WE COVER

*The Complete Node.js Course *

# Table of Contents

1. [Module 2: Node Module System]()

```bash
	 Introduction- Welcome to the Node Module System.
```

```bash
	 Global Object-

	 1- create a model folder
	 2- touch user.js 
	 3- paste this body content


const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1024
	}
}));

function validateUser(user) {
	const schema = {
		name: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required()
	};

	return Joi.validate(user, schema);
}


exports.User = User;
exports.validate = validateUser;  

	4- install Joi like this -> npm i joi
	5- install mongoose like this -> npm i mongoose
```

```bash
	 Modules- 

	 see you tomorrow, we're gonna pick up the pace, so let's be ready!
```