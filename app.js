require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var jwt = require("jsonwebtoken");
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cardRouter = require("./routes/card");
var authRouter = require("./routes/auth");
var historyRouter = require("./routes/history");
var verif = require("./middleware/VerifyToken");

var app = express();

app.use(logger("dev"));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/0", authRouter);
// app.use("/users", usersRouter);
app.use("/users", verif, usersRouter);
// app.use("/card", cardRouter);
app.use("/card", verif, cardRouter);
// app.use("/history", historyRouter);
app.use("/history", verif, historyRouter);

module.exports = app;
