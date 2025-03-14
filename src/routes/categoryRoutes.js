import express from "express";
import createCategory from "../controllers/categories/create-category.js";
import getCategories from "../controllers/categories/get-categories.js";
import getCategoryById from "../controllers/categories/get-category-by-id.js";
import updateCategory from "../controllers/categories/update-category.js";
import deleteCategory from "../controllers/categories/delete-category.js";

const router = express.Router();

router.post("/", createCategory); // Create a category

router.get("/", getCategories); // Get all categories
router.get("/:id", getCategoryById); // Get category by ID

router.put("/:id", updateCategory); // Update a category

router.delete("/:id", deleteCategory); // Delete a category

export default router;
