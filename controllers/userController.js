const { JWT_SECRET } = require("../config");
const User = require("../Models/user");
const { hashPassword, comparePassword } = require("../utils/utils");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });
    return res.status(201).json(newUser);  
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });    
  }   
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: 60 * 30 });
    return res.status(200).json({ token });
    
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Internal server error" });    
  }
}

module.exports = {
  register,
  login,
}
