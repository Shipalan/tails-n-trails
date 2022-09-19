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
    const { username, password } = req.body;
    // console.log(username, password);

    sequelize
      .query("SELECT employee_user, employee_password FROM employee")
      .then((dbRes) => {
        const { employee_user, employee_password } = dbRes[0][0];
        // console.log(dbRes[0])

        if (username === employee_user) {
          if (password === employee_password) {
            res.status(200).send("Login Successful");
          }
        } else {
          res.status(400).send("login or username incorrect");
        }
      });
  },
};
