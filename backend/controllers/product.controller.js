const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  console.log(`req ${req.body.name}`);
  if (!req.body.name) {
    res.status(400).send({
      message: "Must have a name!",
    });
    return;
  }
  // Create a Product
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    type: req.body.type,
    product: req.body.product,
  };
  // Save Tutorial in the database
  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product.",
      });
    });
};
exports.findAll = (req, res) => {
  const title = req.query.title;
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
