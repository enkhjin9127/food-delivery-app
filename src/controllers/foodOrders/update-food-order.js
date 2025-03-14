import FoodOrder from "../../models/FoodOrder.js";

const updateFoodOrder = async (req, res) => {
  try {
    const { foodOrderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await FoodOrder.findByIdAndUpdate(
      foodOrderId,
      { status },
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

export default updateFoodOrder;
