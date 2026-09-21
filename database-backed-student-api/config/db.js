require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
 try {
 await mongoose.connect(process.env.MONGO_URI, {
  dbName: "csc220",
 });
 const studentCount = await mongoose.connection.db
  .collection("students")
  .countDocuments();
 console.log(`MongoDB connected to database: ${mongoose.connection.name}`);
 console.log(`Students in database: ${studentCount}`);
 } catch (error) {
 console.error("MongoDB connection error:", error.message);
 }
};
module.exports = connectDB;