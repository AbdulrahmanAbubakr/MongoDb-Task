const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  firstName: {
    type: String,
    // required: true,
    minLength: 3,
    maxLength: 15,
  },
  email: String,
  age: {
    type: Number,
    min: 13,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
