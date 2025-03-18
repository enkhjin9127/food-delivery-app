import express from "express";
import createFoodOrder from "../controllers/foodOrders/create-food-order.js";
import getFoodOrders from "../controllers/foodOrders/get-food-orders.js";
import getFoodOrderByUser from "../controllers/foodOrders/get-food-order-by-user.js";
import updateFoodOrder from "../controllers/foodOrders/update-food-order.js";
import cancelFoodOrder from "../controllers/foodOrders/cancel-Food-Order.js";

const router = express.Router();

router.post("/", createFoodOrder); // Create a new food order
router.get("/", getFoodOrders); // Get all food orders
router.get("/:userId", getFoodOrderByUser); // Get food orders by user ID
router.put("/:foodOrderId", updateFoodOrder); // Update food order
router.put("/:foodOrderId/cancel", cancelFoodOrder);

export default router;
