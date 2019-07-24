const express = require("express");
const connectDB = require("./startup/db");
const cors = require("cors");

const app = express();

//Connect Database
connectDB();

//Initialize CORS
app.use(cors());

//Initialize Middleware
app.use(express.json({ extended: false }));

//Define port to host server
const PORT = process.env.PORT || 5000;

//Import routes
const colors = require("./routes/colors");

//Initialize routes
app.use("/api/colors", colors);

//Initialize server
app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
