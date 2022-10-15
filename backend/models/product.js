module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      type: {
        type: Sequelize.STRING
      },
      qtyInStock: {
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING
      }
    });
    return Product;
  };