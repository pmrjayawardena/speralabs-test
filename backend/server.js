const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB();
dotenv.config();
const app = express();

//allows to get json data in the body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  );
});
