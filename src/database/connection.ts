import { Sequelize } from "sequelize-typescript";

// env config server + ya garnu parxa
  
import { config } from "dotenv";
config()
const sequalize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [__dirname + "/models"],
});
sequalize
  .authenticate()
  .then(() => {
    console.log("Authtentication Successful!");
  })
  .catch((err) => {
    console.log("Something went wrong:", err);
  });

sequalize.sync({ alter: false }).then(() => {
  console.log("Migration Successful!");
});

export default sequalize;