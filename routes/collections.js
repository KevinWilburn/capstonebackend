const express = require('express');
const router = express.Router();
const User = require('../models/user')



router.post('/', async (req, res) => {
    try {
   
    const user = new User({
    name: "Kevin Wilburn",
    email: "wilburnkevin200@gmail.com",
    password: "password",
    });
    await user.save();
    return res.send(user);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

// All endpoints and route handlers go here
module.exports = router;

