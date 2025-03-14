import User from "../../models/user.scheme.js";

const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default createUser;
