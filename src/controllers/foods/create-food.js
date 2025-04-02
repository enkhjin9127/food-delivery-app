import Food from "../../models/Food.js";

const createFood = async (req, res) => {
  try {
    const { name, price, category, description, image, ingredients } = req.body;

    if (
      !name ||
      !price ||
      !category ||
      !image ||
      !ingredients ||
      !ingredients.length
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newFood = new Food({
      name,
      price,
      category,
      description,
      image,
      ingredients,
    });

    await newFood.save();
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default createFood;
