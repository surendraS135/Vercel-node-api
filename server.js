// server.js
const express = require("express");
const { initDb } = require("./models/index");
const employeeRoute = require("./routes/employees");
const indexRoute = require("./routes/index");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use the employee routes
app.use("/", indexRoute);
app.use("/employees", employeeRoute);

app.listen(port, async () => {
  await initDb();
  console.log(`Server is running on http://localhost:${port}`);
});
