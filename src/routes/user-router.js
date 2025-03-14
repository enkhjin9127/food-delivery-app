import express from "express";
import createUser from "../controllers/users/create-user.js";
import getUsers from "../controllers/users/get-users.js"; // Import read controller
import getUserById from "../controllers/users/get-user-by-id.js"; // Import get by id controller
import updateUser from "../controllers/users/update-user.js"; // Import update controller
import deleteUser from "../controllers/users/delete-user.js"; // Import delete controller
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", authMiddleware, getUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

export default router;
