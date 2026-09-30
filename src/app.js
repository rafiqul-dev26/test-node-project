const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const loggerMiddleware = require("./middleware/logger.middleware");
const errorMiddleware = require("./middleware/error.middleware");
const { setupSwagger } = require("./config/swagger");
const visitorService = require("./services/visitor.service");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

setupSwagger(app);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Node.js JSON API is running"
  });
});

app.get("/test", (req, res) => {
  const visitorCount = visitorService.incrementVisitorCount();
  res.status(200).json({
    success: true,
    message: "Node.js JSON API is running",
    visitorCount
  });
});

app.use("/api", routes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.use(errorMiddleware);

module.exports = app;
