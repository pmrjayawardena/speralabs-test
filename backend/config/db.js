const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://prabodha:prabodha@cluster0.w9d5m.mongodb.net/speralabs?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error : ${error}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
