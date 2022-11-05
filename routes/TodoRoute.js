import express from "express";
import {
  createTodoItem,
  deleteTodoItem,
  getTodoItems,
  getTodoItemsById,
  updateTodoItem,
} from "../controllers/TodoController.js";

const router = express.Router();

// GET /todo-items
router.get("/todo-items", getTodoItems);

// GET /todo-items/:id
router.get("/todo-items/:id", getTodoItemsById);

// POST /todo-items
router.post("/todo-items", createTodoItem);

// DELETE /todo-items/:id
router.delete("/todo-items/:id", deleteTodoItem);

// PATCH /todo-items/:id
router.patch("/todo-items/:id", updateTodoItem);

export default router;
