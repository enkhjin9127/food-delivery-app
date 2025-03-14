import Food from "../../models/Food.js";

const deleteFood = async (req, res) => {
  const { id } = req.params;

  try {
    const food = await Food.findByIdAndDelete(id);

    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res.status(204).send(); // No content after deletion
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default deleteFood;
