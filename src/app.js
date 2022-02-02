const path = require("path");
const express = require("express");
const jsonData = require("../data/data.json");

const app = express();
const publicDirectory = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectory));

app.get("/product", (req, res) => {
  res.render("product-details-page", jsonData);
});

app.listen(3000, () => {
  console.log("Server is up on 3000");
});
