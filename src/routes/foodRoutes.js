import express from "express";
import createFood from "../controllers/foods/create-food.js";
import getFoods from "../controllers/foods/get-foods.js";
import getFoodById from "../controllers/foods/get-food-by-id.js";
import updateFood from "../controllers/foods/update-food.js";
import deleteFood from "../controllers/foods/delete-food.js";

const router = express.Router();

// Route to create a food item
router.post("/", createFood);

// Route to get all food items
router.get("/", getFoods);

// Route to get a food item by ID
router.get("/:id", getFoodById);

// Route to update a food item by ID
router.put("/:id", updateFood);

// Route to delete a food item by ID
router.delete("/:id", deleteFood);

export default router;
