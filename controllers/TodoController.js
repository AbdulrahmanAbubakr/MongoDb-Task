const { log } = require("console");
const Todo = require("../models/Todo");

const createTodo = (_title, _tags) => {
  try {
    let data = Todo.create({
      title: _title,
      tags: _tags,
    });
    if (data) {
      console.log("todo creation is done");
    }
  } catch (e) {
    console.log(e);
  }
};

const getAllTodos = async () => {
  try {
    let data = await Todo.find();
    if (data) {
      console.log(data);
    }
  } catch (e) {
    console.log(e);
  }
};

const findTodo = async (_userId) => {
  try {
    let data = await Todo.find({ _id: _userId });
    if (data) {
      console.log("To do is found", data);
    }
  } catch (e) {
    console.log(e);
  }
};

const updateTodo = async (_todoId, _title) => {
  try {
    let data = await Todo.findOneAndUpdate({ _id: _todoId }, { title: _title });
    if (data) {
      console.log("To do Is Edited", data);
    }
  } catch (e) {
    console.log(e);
  }
};

const deleteTodo = async (_todoId) => {
  try {
    let data = await Todo.deleteOne({ _id: _todoId });
    if (data) {
      log("To do is deleted", data);
    }
  } catch (e) {
    console.log(e);
  }
};
module.exports = { createTodo, getAllTodos, findTodo, updateTodo, deleteTodo };
