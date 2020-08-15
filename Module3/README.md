# WE COVER

*The Complete Node.js Course *

# Table of Contents

1. [Module 3: Node Package Manager (NPM)]()

```bash
	 Introduction- Welcome to the Node Package Manager (NPM).
```

```bash
	 Package.json - 

	 1 - initialize package.json with : npm init	 
```


```bash
	 Installing a Node Package - 

	 1 - Installing a Node Package like this : npm install name_of_package
```


```bash
	 Using a Package - 
	 
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
	 Package Dependencies - 
	 
```