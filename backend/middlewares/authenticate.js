// auth-service/middlewares/authenticate.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authenticateMiddleware = (req, res, next) => {
  console.log(req.body);
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Authorization token missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    res.locals.username = decoded.userName;

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = { authenticateMiddleware };
