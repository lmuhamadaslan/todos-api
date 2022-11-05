import Activity from "../models/ActivityModels.js";

// GET /activity-groups

export const getActivityGroups = async (req, res) => {
  try {
    const data = await Activity.findAll();
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

// GET /activity-groups/:id
export const getActivityGroupById = async (req, res) => {
  try {
    const data = await Activity.findByPk(req.params.id);
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

// POST /activity-groups with deletedAt = null
export const createActivityGroup = async (req, res) => {
  try {
    const data = await Activity.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Success",
      data: {
        crated_at: data.created_at,
        updated_at: data.updated_at,
        id: data.id,
        title: data.title,
        email: data.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// DELETE /activity-groups/:id
export const deleteActivityGroup = async (req, res) => {
  try {
    const data = await Activity.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (data) {
      res.status(200).json({
        status: "Success",
        message: "Success",
        data: {},
      });
    } else {
      res.status(404).json({
        status: "Not Found",
        message: `Activity with ID ${req.params.id} Not Found`,
        data: {},
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

// PATCH /activity-groups/:id
export const updateActivityGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    await Activity.update(
      { title: title },
      {
        where: {
          id: id,
        },
      }
    );
    const data = await Activity.findByPk(id);
    res.status(202).json({
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
