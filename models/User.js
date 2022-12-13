const { Schema, model } = require('mongoose');

//  TODO
//  add thoughts to user schema
//  add friends to user schama CHECK CHALLENGE PAGE
//

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true // email must be unique
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id:false
    });

//create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;
