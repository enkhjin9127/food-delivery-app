import FoodOrder from "../../models/FoodOrder.js";

const cancelFoodOrder = async (req, res) => {
  try {
    const { foodOrderId } = req.params;

    const updatedOrder = await FoodOrder.findByIdAndUpdate(
      foodOrderId,
      { status: "cancelled" },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Food order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default cancelFoodOrder;
