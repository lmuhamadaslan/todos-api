import Todo from "../models/TodoModels.js";

// GET /todo-items
export const getTodoItems = async (req, res) => {
  try {
    const data = await Todo.findAll();
    if (!data) {
      res.status(404).json({
        status: "Error",
        message: "Data not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// GET /todo-items/:id
export const getTodoItemsById = async (req, res) => {
  try {
    const data = await Todo.findByPk(req.params.id);
    if (!data) {
      res.status(404).json({
        status: "Error",
        message: "Data not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// POST /todo-items
export const createTodoItem = async (req, res) => {
  try {
    const data = await Todo.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "Success",
      data: {
        crated_at: data.created_at,
        updated_at: data.updated_at,
        id: data.id,
        title: data.title,
        activity_group_id: data.activity_group_id,
        ia_active: data.is_active,
        priority: data.priority,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// DELETE /todo-items/:id
export const deleteTodoItem = async (req, res) => {
  try {
    const data = await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      res.status(404).json({
        status: "Not Found",
        message: `Todo item with id ${req.params.id} not found`,
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Success",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// PATCH /todo-items/:id
export const updateTodoItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    await Todo.update({title: title}, {
      where: {
        id: id,
      },
    });
    const data = await Todo.findByPk(id);
    res.status(200).json({
      status: "Success",
      message: "Success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
