module.exports = app => {
    const sales = require("../controllers/sales.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", sales.create);
    // // Retrieve all Tutorials
    router.get("/", sales.findAll);
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    // // Retrieve a single Tutorial with id
    router.get("/product/:productId", sales.findAll);
    // Update a Tutorial with id
    // router.put("/:id", products.update);
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
    app.use('/api/sales', router);
  };