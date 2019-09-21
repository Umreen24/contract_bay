const User = require('../models/user');

exports.register = async(req, res) => {
    try{
        const user = new User(req.body)
        await user.save()
        res.json({user, message: 'Registration successful!'})
    } catch (error) {
        res.send(error)
    }
};

exports.login = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findByCredentials(email, password)
        if(!user) {
            return res.json({error: 'Login failed! Check credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch(error) {
        res.send(error)
    }
};