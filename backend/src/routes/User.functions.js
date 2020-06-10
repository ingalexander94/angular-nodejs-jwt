const User = require("../database/models/User");
const jwt = require("jsonwebtoken");

const register = async (email, password) => {
  const newUser = new User({ email, password });
  await newUser.save();
  const token = jwt.sign({ _id: newUser._id }, "secretKey");
  return token;
};

const login = async (email, password) => {
  const user = await User.findOne({ email, password });
  if (!user) return null;
  const token = jwt.sign({ _id: user._id }, "secretKey");
  return token;
};

const extraerToken = (token) => jwt.verify(token, "secretKey");

module.exports = {
  register,
  login,
  extraerToken,
};
