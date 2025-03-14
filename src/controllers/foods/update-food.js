import Food from "../../models/Food.js";

const updateFood = async (req, res) => {
  const { id } = req.params;

  try {
    const food = await Food.findByIdAndUpdate(id, req.body, {
      new: true,
    }).populate("category");

    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default updateFood;
