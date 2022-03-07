var express = require('express');
var router = express.Router();
const Product = require("../models/Products");

/////////// --- Khai báo các xử lý trong 1 Controller
router.get("/", getProduct);

async function getProduct(req, res) {
    var productList = await Product.find({}, function (err) {
        if (err) throw err;
    })
    res.render("product", { 
        title: "Product Page",
        product: productList
     });
}

/// - NEW --> Create
router.get("/new", getNewProduct);
router.post("/new", getNewProduct);

function getNewProduct(req, res) {
    res.render("products/product-new", { title: "Create a New Product" });
}

/// - DELETE --> Delete
router.get("/delete", getDeleteProduct);
async function getDeleteProduct(req, res) {
    var productList = await Product.find({}, function (err) {
        if (err) throw err;
    })
    res.render("products/product-delete", { 
        title: "Deleting an existing Product",
        product: productList
    });
}
router.post("/delete", postDeleteProduct);
async function postDeleteProduct(req, res) {
    await Product.deleteOne ({
        ProductCode: req.body.productCode
    }, function(err) {
        if (err) throw err;
    })
    res.redirect("/product");
}

/// - CRUD - C - Create / Post
router.post("/", createNewProduct);

async function createNewProduct(req, res) {
    const newProduct = new Product ({
        ProductName: req.body.ProductName,
        ProductCode: req.body.ProductCode,
        Information: req.body.Information,
        Price: req.body.Price,
        Unit: req.body.Unit,
        ImgLink: req.body.ImgLink
    });
    await newProduct.save(async function (err) {
        if (err) throw err;
        res.redirect("/product");
    })
    //res.render("product-new", { title: "Create a New Product" });
}


/// - reEDIT --> Update
router.get("/edit", getEditProduct);

function getEditProduct(req, res) {
    res.render("product-edit", { title: "Create a New Product" });
}

/// - CRUD - U - Update / Put 
router.put("/:id", updateProduct);

function updateProduct(req, res) {
    res.render("product-update", { title: "Update a Product" });
}


/// - CRUD - D - Delete 
router.delete("/:id", deleteProduct);

function deleteProduct(req, res) {
    res.render("product-delete", { title: "Update a Product" });
}


/// --- EXports
module.exports = router;