import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  age: {
    type: Number,
    required: true,
    min: [18, "Age must be at least 18, got {VALUE}"],
    max: 60,
  },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "SUPERADMIN"],
    default: "USER",
  },
});

export const User = model<IUser>("User", userSchema);
