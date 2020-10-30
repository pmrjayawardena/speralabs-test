const bcrypt = require("bcryptjs");

const users = [
  {
    firstName: "Admin ",
    lastName: "User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    address: "Hanwella",
    phone: "0719140068",
    isAdmin: true,
  },
  {
    firstName: "John Doe",
    lastName: "User",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    address: "Hanwella",
    phone: "0719140068",
  },
  {
    firstName: "Jane Doe",
    lastName: "User",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    address: "Hanwella",
    phone: "0719140068",
  },
  {
    firstName: "Prabodha",
    lastName: "Jayawardena",
    email: "prabodha@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    address: "Hanwella",
    phone: "0719140068",
  },
];

module.exports = users;
