require("dotenv").config();

const express = require("express");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const path = require("path");

app.use(cors());
app.use(express.json());

const { getProducts, getUser } = require("./controller");

app.get("/api/allProducts", getProducts);

app.post("/api/verifyUser", getUser);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

//* Server port configuration ------------------------------------------------------------*/

app.listen(PORT, () => {
  console.log("App is running on 4000");
});
