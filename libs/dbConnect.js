const mongoose = require("mongoose");

/// Thông tin Database Collection / Tables
const dbconfig = require("../configs/db_config");
const userName = dbconfig.dbusername;
const userPassword = dbconfig.dbpassword;
const dbName = dbconfig.dbname;

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.0stms.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

const connectDB =  mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });


module.exports = connectDB;