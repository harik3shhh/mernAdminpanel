const mongoose = require("mongoose");


// const DB = "mongodb://127.0.0.1:27017/adminpaneldb";
const DB = process.env.DB;

const connectDb = async() => {
    try {
        await mongoose.connect(DB);
        console.log("Connection Successfull!");
    } catch (error) {
        console.error("Connection Failed");
        process.exit(0);
    }
};

module.exports = connectDb;

