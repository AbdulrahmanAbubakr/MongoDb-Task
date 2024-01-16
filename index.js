// const { error } = require("console");
const mongoose = require("mongoose");
const User = require("./models/User");
const Todo = require("./models/Todo");
const UserController = require("./controllers/UserController");
const todoController = require("./controllers/TodoController");
// const Todo = require("./models/todo");
mongoose
  .connect("mongodb://127.0.0.1:27017/day3")
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

// UserController.Register("mo", "mahmoud@gmail.com", "1234654", "Abubakr");
// UserController.Login("mo", "mahmoud@gmail.com");
// UserController.deleteUser("Abdelrahman", "mahmoud@gmail.com");
// UserController.updateUser("abdo", "abdo@gmail.com");
// UserController.findAll();

/**              Todos             */

// User.create({ name: "abod" }).then((data) => {
//   console.log(data);
//   todoController.createTodo("Study Angular", "Mern", data._id);
// });
todoController.getAllTodos();
// todoController.findTodo("65a692ed6c2b646e58c8d4e5");
// todoController.updateTodo("65a692ed6c2b646e58c8d4e9", "study Html");
// todoController.deleteTodo("65a692ed6c2b646e58c8d4e9");
