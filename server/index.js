const express = require("express");
require("dotenv").config();
const authRouter = require("./routes/auth");
const projectRouter = require("./routes/project");
const skillRouter = require("./routes/skill");
const testimonialRouter = require("./routes/testimonial");
const { db } = require("./connection");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT || 8080;

// MiddleWare
app.use(express.json());
app.use(cookieparser());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "build")));

// Routes
app.use("/auth", authRouter);
app.use("/project", projectRouter);
app.use("/skill", skillRouter);
app.use("/testimonial", testimonialRouter);

//database connection
db();

app.listen(port, () => {
  console.log(`server is listening on port number ${port}`);
});
