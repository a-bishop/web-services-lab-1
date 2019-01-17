// 1. Module Imports
const express = require("express");
const app = express();
const path = require("path");
const http = require("http");

// Router
const appRouter = require("./app_server/routes/app_router");

// 2. Configuration - Use Pug as our HTML Template Engine
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "pug");

// 3. Middleware
app.use(express.static(path.join(__dirname, "public")));

// 4. Routes
app.use("/", appRouter);

app.use((req, res) => {
  res.status(404);
  res.send("File not found!");
});

http.createServer(app).listen(3000, () => {
  console.log("React Express App started on Port 3000.");
});

