import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: { type: String },
  quantity: { type: Number, default: 1 },
  image: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
});

const Food = mongoose.model("Food", foodSchema);
export default Food;
