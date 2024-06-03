const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv").config();
const webRouter = require("./routes/webRouter");
const connectDb = require("./config/dbConnect");
connectDb();
app.use(express.static(path.join(__dirname, "../build")));
const port = process.env.port || 3000;
const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
