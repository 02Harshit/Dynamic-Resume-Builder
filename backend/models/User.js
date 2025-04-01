const mongoose = require('mongoose');
// this file creates a structure for our database objects
const UserSchema = new mongoose.Schema ({
    name: {type: String , required: true },
    email: { type: String , required: true, unique: true },
    password: {type: String , required: true}
}, { timestamps: true}); // timestamps will add createdAt and updatedAt fields to the schema
// this will create a collection in the database with the name 'users' and the schema defined above

module.exports = mongoose.model('User', UserSchema);