import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const { DataTypes } = Sequelize;

const Todo = sequelize.define(
  "todos",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    activity_group_id: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "activities",
        key: "id",
      },
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING(150),
      defaultValue: "very-high",
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

export default Todo;

await sequelize.sync();
