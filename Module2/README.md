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
5 - install joi-objectid like this-> npm i joi-objectid
6- install mongoose like this -> npm i mongoose
```

```bash
	 Modules- 

	 1 - create server file : touch index.js
	 2 - create server with express //index.js
	 3 - connect MongoDB database //index.js
	 4 - create route file: touch routes/user.js
	 5 - create & save new user to database // routes/user.js
```


```bash
	 Creating a Module- 


	 1 - Look lodash documentation https://lodash.com/
	 2 - install lodash like this -> npm install lodash 
	 3 - add module like this -> const _ = require('lodash');  // routes/users
	 4 - Look joi-password-complexity documentation -> https://www.npmjs.com/package/joi-password-complexity
	 5 - install joi-password-complexity liek this -> npm i joi-password-complexity
```

```bash
	 Loading a Module- 
	 1 - npm i bcrypt
	 2 - touch hash.js // Module2

	 3 - write this body content :

		const bcrypt = require('bcrypt');

		async function run() {
			const salt = await bcrypt.genSalt(10);
			const hashed = await bcrypt.hash('1234', salt);
			console.log(salt);
			console.log(hashed);	
		}

		run();

	4 - run node hash.js
	5 - update users.js // see -> // routes/users update comment lines 

```


```bash
	 Module Wrapper Function-
	 1 - touch routes/auth.js
	 2 - write this body content

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

			res.send(true);
		});

		function validate(req) {
			const schema = Joi.object({
				email: Joi.string().min(5).max(255).required().email(),
				password: Joi.string().min(5).max(255).required()
			});

			return Joi.assert(req, schema);
		}

		module.exports = router;
```

```bash
	 Path Module -

	 test auth API : URL endpoint -> http://localhost:3000/api/auth

	 1 - email & password
	 2 - Invalid email
	 3 - Invalid password
```

```bash
	 OS Module -
	 1 - Look JSON Web Tokens work (documentation) -> https://jwt.io/
	 2 - 
	 
```


```bash
	 File System Module -

	 1 - npm i jsonwebtoken
	 2 - Look update2 lines in routes/auth
	 3 - test post request on postman You see token code
	 4 - Paste token code -> https://jwt.io/ You see Decoded informations	 
```


```bash
	  Events Module -
	  1 - npm i config
	  2 - create folder "config"
	  3 - In this folder create 'default.json' file
	  4 - create another file like this touch config/custom-environment-variables.json
	  5 - nodemon index.js you see 	"Fatal error: jwtPrivateKey is not defined"
	  6 - export vidly_jwtPrivateKey=mySecureKey || SET vidly_jwtPrivateKey=mySecureKey
	  7 - run nodemon index.js
```