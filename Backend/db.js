const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshit:jyeZvRA5dgSyCMDA@cluster0.ao4jlp5.mongodb.net/auth');

const SignupSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const auth = mongoose.model('Signup', SignupSchema);

module.exports = {
    auth
};
