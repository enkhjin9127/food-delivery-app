import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    orderedFood: [
      {
        foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      },
    ],
    isVerified: { type: Boolean, default: false },
    token: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
