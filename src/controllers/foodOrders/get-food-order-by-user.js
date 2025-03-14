import FoodOrder from "../../models/FoodOrder.js";

const getFoodOrderByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await FoodOrder.find({ userId }).populate("foodItems");
    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user" });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getFoodOrderByUser;
