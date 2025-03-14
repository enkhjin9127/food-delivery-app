import User from "../../models/user.scheme.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("orderedFood.foodId");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getUsers;
