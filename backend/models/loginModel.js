const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true, unique: true},
})

const login = mongoose.model("login", loginSchema);

module.exports = { login };

