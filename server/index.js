require("dotenv").config();

const express = require("express");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
app.use(cors());

const { getProducts } = require("./controller");

app.get("/api/allProducts", getProducts);

//* Server port configuration ------------------------------------------------------------*/

app.listen(PORT, () => {
  console.log("App is running on 4000");
});
