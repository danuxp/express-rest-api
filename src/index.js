const express = require("express");

const userRouter = require("./routes/users");

const middlewareLog = require("./middleware/logs");

const app = express();

app.use(middlewareLog);

app.use(express.json());

app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("Server berhasil dijalankan");
});
