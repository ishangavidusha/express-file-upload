const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

app.use(cors({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers": "Origin,Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  credentials: true,
}));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
