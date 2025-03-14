import Food from "../../models/Food.js";

const getFoods = async (req, res) => {
  try {
    const foods = await Food.find().populate("category");
    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getFoods;
