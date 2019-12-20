const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type:String,
        required : [true, 'Debe completar el mail']
    },
    password: {
        type: String,
        required: [true, 'Debe completar el password']
    },
    firstName: {
        type: String,
        required: [true, 'Debe completar el nombre']
    },
    surName: {
        type: String,
    },
});


module.exports = mongoose.model('User', userSchema);