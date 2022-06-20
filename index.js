require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const membershipRoutes = require("./src/routes/membership");
const cors = require("cors")
const app = express();
const PORT = parseInt(process.env.PORT) || 8080;
const DB  = process.env.MONGO_DB || 'mongodb://localhost:27017/reign_fitness';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/memberships", membershipRoutes);

const connectDB = async () => {
  console.log(DB);
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
  console.log("Press CTRL + C to stop the process. \n");
});