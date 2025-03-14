import FoodOrder from "../../models/FoodOrder.js";

const getFoodOrders = async (req, res) => {
  try {
    const orders = await FoodOrder.find()
      .populate("foodItems")
      .populate("userId");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getFoodOrders;
