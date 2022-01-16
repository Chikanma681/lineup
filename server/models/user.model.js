const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name : {type: String, required: true, unique: true},
		description: {type: String, required: false},
		address: {type: String, required: true}
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model