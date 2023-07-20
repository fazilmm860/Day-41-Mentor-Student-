const express = require('express')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/user')

//Validation of User Inputs
const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
})

//Signup user
const signup = async (req, res) => {
    const usernameExist = await User.findOne({ username: req.body.username })
    if (usernameExist) {
        res.status(400).send('Username already exist')
        return
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassowrd = await bcrypt.hash(req.body.password, salt)

    //process of adding New user

    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.hashedPassowrd
    });
    try {
        const { error } = await registerSchema.validateAsync(req.body);
        if (error) {
            res.status(400).send(error.details[0].message)
            return;
        }
        else {
            const saveUser = await user.save();
            res.status(201).send('User Created successfully')
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
}

//Login User
const loginSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required()
})

const loginUser = async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).send('Incorrect username')

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send("Incorrect password");
    try {
        const { error } = await loginSchema.validateAsync(req.body)
        if (error) {
            res.status(400).send(error.details[0].message)
            return;
        }
        else {
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
            res.header("auth-token", token).send(token)
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { signup, loginUser }