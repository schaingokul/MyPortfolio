const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { login } = require('../models/loginModel');
const jwt = require('jsonwebtoken');
const cookie = require('cookie-parser');
const nodemailer = require("nodemailer");

router.post('/signup', async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const isEmail = await login.findOne({ email });

    if (isEmail) {
        return res.status(400).json({ message: "!User is already Registered" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new login({ name, email, password: hashPassword });
    await newUser.save();
    return res.status(201).json({status: true, message: "Registered Successfully" });

    }catch(error){
        res.status(400).json({message: "User is not registered"}); 
    }
    
});

router.post('/login', async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await login.findOne({email})
        
        if(!user){
            return  res.json({message: "User is not register"});
        }

        const validPassword = await bcrypt.compare(password, user.password)
        
        if(!validPassword){
            return res.json({message: "password is incorrect"});
        }

        const key = "jwttokenkey";
        const token = jwt.sign({name: user.name}, key, {expiresIn: '1h'});
        res.cookie('token', token, {httpOnly: true, maxAge: 360000})
        return res.json({status: true, message: "login Successfully"})
    }catch(error){
        res.status(400).json({message: "User is not registered"}); 
    }
    
})

router.post('/forgot-password', async(req,res) => {
    try{
        const {email} = req.body;
        const user = await login.findOne({email});
        if(!user){
            return res.status(400).json({message: "user id is not registered"});
        }
        const KEY = "jwttokenkey";
        const token = jwt.sign({id: user._id}, KEY, {expiresIn: '5m'})

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'schaingokul@gmail.com',
              pass: 'hczm bqyp jdzf lvbc'
            }
          });
          
          const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
          var mailOptions = {
            from: 'schaingokul@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:3000/resetpassword/${encodedToken}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({message: "error sending email "})
            } else {
             return res.json({status: true, message: `Email sent: ${info.response}`});
            }
          });
    }catch(error){
        res.status(400).json({message: "Invalid Email id is given"})
    }

})

router.post('/resetpassword/:token', async(req,res) => {
        const {token} = req.params;
        console.log(token);
    try{
        const {password} = req.body;
        console.log("Token received on server:", token);
    let KEY = "jwttokenkey";
    const decode = await jwt.verify(token, KEY);
    console.log(token)
    const id = decode.id;
    const hashPassword = await bcrypt.hash(password, 10);
    await login.findByIdAndUpdate({_id: id}, {password: hashPassword});
    return res.status(200).json({status: true, message: "Updated password"});
   } catch(error){
    res.status(400).json({message: "try again later"});
   }

})

module.exports = router;

