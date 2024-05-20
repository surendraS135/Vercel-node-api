// models/index.js
const sequelize = require("../config/db");
const Employee = require("./employee-model");

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync({ force: true });
    console.log("Employee model synced with database.");

    await Employee.create({
      name: "John Deo",
      email: "john@gmail.com",
      contact: "9876543210",
      company: "omni",
    });
    console.log("Sample user created successfully.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
};

module.exports = { initDb, Employee };
