import { Sequelize } from "sequelize";
import sequelize from "../config/Database.js";

const { DataTypes } = Sequelize;

const Activity = sequelize.define(
  "activity_group",
  {
    id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(150),
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

export default Activity;

await sequelize.sync();
