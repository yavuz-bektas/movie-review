// auth-service/controllers/userController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const comments = require("../models/comments.js");

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user." });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign(
      { userId: user._id, userName: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d", // Token will expire in 1 day
      }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in." });
  }
};

exports.postComment = async (req, res) => {
  const movieId = req.body.id;
  const text = req.body.text;
  const rating = req.body.rating;
  const username  = req.body.username

  try {
    const comment = new comments({ movieId, text, rating,username });
    await comment.save();
    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
exports.getComment = async (req, res) => {
  const movieId = req.body.id;

  // Find comments for the specified movieId and sort by the 'createdAt' field in descending order
  try {
    const comment = await comments
      .find({ movieId })
      .sort({ createdDateTime: -1 });

    return res.json({ comment, userName: res.locals.username });
  } catch (error) {
    // Handle error, if any
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
