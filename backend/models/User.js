import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true
    },

    passwordHash: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    // after regsiter immediate hit person route fetch the newly created id from there and update the personId
    personId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person"
    },

    // as a reference of userId to create a familyId and add it here before moving to the main screen
    familyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family"
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model("User", userSchema, "users");
