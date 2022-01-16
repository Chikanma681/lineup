const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(`mongodb+srv://LukeWismer:${process.env.MONGO_PWD}@lineup.nddnc.mongodb.net/lineup?retryWrites=true&w=majority`)

app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			email: req.body.email,
			password: newPassword,
			name: req.body.storeName,
			description: req.body.description,
			address: req.body.address
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Email or Name Already Exists' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		name: req.body.name
	})
	
	if (!user) {
		return { status: 'error', error: 'Invalid Store Name' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name
			},
			'secret_key_123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.listen(1337, () => {
	console.log('Server started on 1337')
})