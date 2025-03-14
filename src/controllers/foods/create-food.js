import Food from "../../models/Food.js";

const createFood = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    const newFood = new Food({
      name,
      price,
      category,
      description,
    });

    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default createFood;
