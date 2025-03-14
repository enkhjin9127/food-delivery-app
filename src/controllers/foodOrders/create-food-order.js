import express from "express";
import Food from "../../models/Food.js"; // Assuming you have a Food model
import FoodOrder from "../../models/FoodOrder.js"; // Assuming you have a FoodOrder model

const router = express.Router();

// POST: Create a new food order
router.post("/", async (req, res) => {
  try {
    const { userId, foodItems } = req.body;

    // Get all food items details from the database using food IDs
    const foods = await Food.find({ _id: { $in: foodItems } });

    // Calculate total price
    const totalPrice = foods.reduce((sum, food) => sum + food.price, 0);

    // Create the food order object
    const foodOrder = new FoodOrder({
      userId,
      foodItems,
      totalPrice, // This will now be the sum of the food prices
      status: "pending", // Default order status
    });

    // Save the food order to the database
    await foodOrder.save();

    // Return success response with the order data
    res.status(201).json({
      message: "Order created successfully",
      foodOrder,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
