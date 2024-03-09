const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  fullName: {
    required: [true, "Please provide name."],
    type: String,
  },
  email: {
    unique: true,
    type: String,
    required: [true, "Please provide email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [8, "Password must contain at least 8 characters"],
  },
  paymentPlan: {
    type: String,
    enum: ["free", "pro", "organization"],
    default: "free",
  },
  role: {
    type: String,
    default: "user",
    enum: ["student", "pro", "teacher", "organization", "user"],
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isNew) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
