module.exports = (sequelize, Sequelize) => {
    const Product = require("./product.js")(sequelize, Sequelize);
    const Sales = sequelize.define("sales", {
      product_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Product,
            key: "id"
        }
      },
      price: {
        type: Sequelize.DOUBLE
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    return Sales;
  };