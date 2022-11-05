import { Sequelize } from "sequelize";

// const dbname = process.env.MYSQL_DBNAME;
// const dbuser= process.env.MYSQL_USER;
// const dbpassword = process.env.MYSQL_PASSWORD;
// const dbhost = process.env.MYSQL_HOST;

const sequelize = new Sequelize("todo_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}

export default sequelize;
