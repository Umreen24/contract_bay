
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    employee_number: {
        type: Number,
        required: [true, 'Employee must have a ID number!']
    }, 

    firstName: {
        type: String, 
        required: [true, 'Please provide employee first name!']
    },

    lastName: {
        type: String, 
        required: [true, 'Please provide employee last name!']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)) {
                throw new Error({error: 'Invalid email address!'})
            }
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10)
    }
    next()
});

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if(!user) {
        throw new Error({error: 'Invalid login credentials'})
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch) {
        throw new Error({error: 'Invalid login credentials'})
    }
    return user
};

const User = mongoose.model('User', userSchema);
module.exports = User;