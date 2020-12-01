const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	passwordHash: {
		type: String,
		required: true
	},
	permissionLevel: [ String ],
	active: {
		type: Boolean,
		required: true
	},
}, {
	timestamps: {
		createdAt: 'created',
		updatedAt: 'updated'
	}
}, {
	collection: 'users'
});

module.exports = mongoose.model('Users', userSchema);
