const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

mongoose.connect(
	`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@lineup.nddnc.mongodb.net/lineup?retryWrites=true&w=majority`
);

app.use(bodyParser.json());

app.post("/api/register", async (req, res) => {
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10);
		console.log();
		await User.create({
			store_name: req.body.name,
			static: {
				email: req.body.email,
				address: req.body.address,
				capacity: req.body.capacity,
				password: newPassword,
				description: req.body.description,
				hours: {
					open: req.body.open_time,
					close: req.body.close_time,
				},
			},
			dynamic: {
				wait_time_avg: req.body.wait_time_avg,
				is_line_open: req.body.is_line_open,
				queue: [],
			},
		});

		res.json({ status: "ok" });
	} catch (err) {
		res.json({ status: "error", error: "Email or Name Already Exists" });
	}
});

app.post("/api/login", async (req, res) => {
	const user = await User.findOne({
		store_name: req.body.name,
	});

	if (!user) {
		return { status: "error", error: "Invalid Store Name" };
	}

	const isPasswordValid = await bcrypt.compare(req.body.password, user.static.password);

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.store_name,
			},
			"secret_key_123"
		);

		return res.json({ status: "ok", user: token });
	} else {
		return res.json({ status: "error", user: false });
	}
});

app.post("/api/insert_user", async (req, res) => {
	console.log(req.body);
	try {
		var new_customer = {
			name: req.body.name,
			phone_number: req.body.phone_number,
			text_messages_enabled: req.body.text_messages_enabled,
			time_waiting: 0,
		};

		User.findOneAndUpdate(
			{ store_name: req.body.store_name },
			{ $push: { "dynamic.queue": new_customer } },
			{ upsert: true, new: true },
			function (error, success) {
				if (error) {
					console.log(errorr);
				} else {
					console.log(success);
				}
			}
		).clone();

		res.json({ status: "ok" });
	} catch (err) {
		res.json({ status: "error", error: "Error Updating DB" });
	}
});

app.post("/api/delete_user", async (req, res) => {
	try {
		if (req.body.name) {
			await User.updateOne(
				{ store_name: req.body.store_name },
				{
					$pull: {
						"dynamic.queue": { name: req.body.name, phone_number: req.body.phone_number },
					},
				}
			).clone();
		} else {
			await User.updateOne(
				{ store_name: req.body.store_name },
				{
					$pop: { "dynamic.queue": -1 },
				}
			).clone();
		}
		res.json({ status: "ok" });
	} catch (err) {
		res.json({ status: "error", error: "Error Deleting DB" });
	}
});

app.listen(1337, () => {
	console.log("Server started on 1337");
});
