// const bcrypt = require('bcrpyt')

require("dotenv").config();
const { DATABASE_URL } = process.env;

const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
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
  getUser: (req, res) => {
    console.log(req.body);
    sequelize
      .query("SELECT employee_user, employee_password FROM employee")
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      });
  },
};
