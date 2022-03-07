var mongoose = require('mongoose');

/// --- declare MODEL "structure"
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});


/// --- DEFINE MODEL
var User = mongoose.model('Users', userSchema, "Users");

/// --- EXports
module.exports = User;