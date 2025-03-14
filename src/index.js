import express from "express";
import userRouter from "./routes/user-router.js";
import connectDB from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import categoryRoutes from "./routes/categoryRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import foodOrderRoutes from "./routes/foodOrderRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
connectDB();

// API routes
app.use("/api/users", userRouter);
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use("/foods", foodRoutes);
app.use("/food-order", foodOrderRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
