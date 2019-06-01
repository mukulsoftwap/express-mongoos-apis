var mongoos = require('mongoose');

mongoos.connect('mongodb+srv://demo:demo123@cluster0-nkpbx.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true });

var Schema = mongoos.Schema;

var userSchema = new Schema({
    name : String,
    number : Number,
    email : String,
    password : String
})

var User = mongoos.model('User', userSchema);

module.exports = User;