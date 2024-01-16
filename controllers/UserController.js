const User = require("../models/User");

const Register = async (_name, _email, _password, _firstName) => {
  try {
    let data = await User.create({
      name: _name,
      email: _email,
      password: _password,
      firstName: _firstName,
    });
    if (data) {
      console.log("Welcome");
    } else {
      console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
};
const Login = async (_name, _email) => {
  try {
    let data = User.find({ name: _name, email: _email });
    if (data) {
      console.log("user is registered");
    }
  } catch (e) {
    console.log(e);
  }
};

const findAll = async () => {
  try {
    let data = await User.find();
    if (data) {
      console.log("done", data);
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteUser = async (_name, _email) => {
  try {
    let data = await User.deleteOne({
      name: _name,
      email: _email,
    });
    if (data) {
      console.log("user is deleted", data);
    }
  } catch (e) {
    console.log(e);
  }
};
const updateUser = async (_name, _email) => {
  try {
    let data = await User.updateOne(
      {
        name: _name,
      },
      {
        email: _email,
      }
    );
    if (data) {
      console.log("User is updated", data);
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Register, Login, findAll, deleteUser, updateUser };
