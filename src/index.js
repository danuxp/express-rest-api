// env
require("dotenv").config();
const port = process.env.PORT || 5000;

const express = require("express");

const userRouter = require("./routes/users");

const middlewareLog = require("./middleware/logs");

const app = express();

app.use(middlewareLog);

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server berhasil dijalankan ${port}`);
});
