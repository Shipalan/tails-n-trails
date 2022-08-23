require("dotenv").config();
const { CONNECTION_STRING } = process.env;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getProducts: (req, res) => {
    sequelize
      .query(
        `SELECT product_img, product_price, product_description FROM products`
      )
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      });
  },
};
