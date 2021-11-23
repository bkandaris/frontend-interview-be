const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!user) {
      return res.status(401).json('no user was found');
    }

    if (!password) {
      res.status(401).json('Password does not match');
    }
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '5d' }
    );
    res.status(201).json({ user, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
