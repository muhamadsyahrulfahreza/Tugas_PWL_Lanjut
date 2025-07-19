require("dotenv").config();
const mongoose = require("mongoose");

const DBConnect = () => {
    mongoose.connect(process.env.MONGODB_CLIENT);
    console.log("Connected!");
};

module.exports = DBConnect;