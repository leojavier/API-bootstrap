const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

//Middleware
const morgan = require("morgan");

const app = express();

//Route files
const bootcamps = require("./routes/bootcamps");

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}!`);
});
