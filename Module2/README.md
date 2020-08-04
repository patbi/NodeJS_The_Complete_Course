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

```
