import User from "../../models/user.scheme.js";

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "orderedFood.foodId"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getUserById;
