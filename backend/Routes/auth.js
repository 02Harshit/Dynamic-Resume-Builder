const express = require('express');//import
const router = express.Router();//call the fun and store it in router variable
const bcrypt = require('bcryptjs');//password hashing 
const jwt = require('jsonwebtoken');//jwt - id card
const User = require('../models/User');

//secret key to sign the frontend user :-
const JWT_SECRET = process.env.JWT_SECRET;

//Sign up route , async - timing issue can occur
router.post('/signup', async (req,res) => {
    const {name,email,password} = req.body;

    //try k ander hum esa code likhte jisme error aa sakta
    try {
        let user = await User.findOne({email});
        if (user) return res.status(400).json({message : "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({name, email, password: hashedPassword});
        await user.save();

        res.status(201).json({message: "User created successfully"});
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

//login route
router.post('/login', async (req,res) => {
    const {email , password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message : "Invalid Credentials!"});

        const isMatch = await bcrypt.compare(password , user.password);
        if (!isMatch) return res.status(400).json({message : "Invalid Credentials!"});

        const token = jwt.sign({id :user._id }, JWT_SECRET , {expiresIn: '1h' });

        res.json({token , user: {id : user._id, name: user.name, email: user.email}});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

module.exports = router;