const db = require("../models");
const Sales = db.sales;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // Create a Sale
  const sale = {
    product_id: req.body.product_id,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  // Save Tutorial in the database
  Sales.create(sale)
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
  Sales.findAll()
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
exports.findAll = (req, res) => {
  const productId = req.params.productId;
  Sales.findAll({
    where: { product_id: productId }
  })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find sale with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Sales instance with id=" + id
      });
    });
};

// exports.update = (req, res) => {
//   const id = req.params.id;
//   Product.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "Product was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update Product with id=${id}.`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });
// };
