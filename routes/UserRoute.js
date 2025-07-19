const express = require("express");
const {getAllData, createUserData} = require("../controller/UserController");
const UserRoute = express.Router();

UserRoute.get("/", getAllData);
UserRoute.post("/", createUserData);

module.exports = UserRoute;