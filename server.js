const express = require("express");
const router = require("./routes/contact.route.js");

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/app/contact", router);

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
