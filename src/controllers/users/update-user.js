import User from "../../models/user.scheme.js";

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default updateUser;
