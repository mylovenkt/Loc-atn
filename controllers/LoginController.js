var express = require('express');
var router = express.Router();
const User = require("../models/Users");

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getLogin);

function getLogin(req, res) {
    res.render("login", { title: "Login Page" });
    //res.sendFile(__dirname + "/view/login.html");
}

router.post("/", postLogin);

function postLogin(req, res) {
    console.log({
        user: req.body.username,
        pass: req.body.password
    });
    var xQuery = {
        username: "",
        password: ""
    };
    if (req.body.username != undefined && req.body.username != null) {
        xQuery.username = req.body.username;
    }
    
    if (req.body.password != undefined && req.body.password != null) {
        xQuery.password = req.body.password;
    }

    var result = "";
    User.findOne(xQuery, function (err, obj) {
        if (err) throw err;
        if (obj == null) {
            result = "Login fail";
        }
        else {
            result = "Login succeed";
        }
        res.render("loginStatus", {
            title: "Login Status",
            result: result,
            username: req.body.username,
        })
    }) 
}


/// --- EXports
module.exports = router;