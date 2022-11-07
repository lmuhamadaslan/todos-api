import { Sequelize } from "sequelize";

// const database = process.env.MYSQL_DATABASE;
// const username = process.env.MYSQL_USER;
// const password = process.env.MYSQL_PASSWORD;
// const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize("todo_db", "username", "password", {
  host: "172.29.240.1",
  dialect: "mysql",
  port: 3306,
  logging: false,
  dialectOptions: {
    Options: {
      encrypt: false,
    },
  }
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}

export default sequelize;
