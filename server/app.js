const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const router = express.Router();

// middleware
// const corsOptions = {
//   origin: ["http://localhost:3000"], // frontend URI (ReactJS)
// };
app.use(express.json());
app.use(cors());

// connect MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     const PORT = process.env.PORT || 8000;
//     app.listen(PORT, () => {
//       console.log(`App is Listening on PORT ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);

//   });
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Mongodb Connected");
    })
    .catch((err) => {
      console.log(err);
    });
});

// route
app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});

router.get("/me", (req, res) => {
  res.send("hello me").status(200);
});
