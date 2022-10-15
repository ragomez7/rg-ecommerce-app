const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./backend/models");

// Drops Product table and populates it with 3 sample items from an array
// import initialProductList from './assets/initialProductList'
const initialProductList = require("./assets/initialProductList")

function generateRandomDateInThePast90Days() { // min and max included 
  const randomDayDifferenceFromNow = Math.floor(Math.random() * (90 + 1))
  return Date.now() - ((24*60*60*1000) * randomDayDifferenceFromNow)
}

const dropAndSync = async () => {
  await db.sequelize.sync({ force: true })
  Product = db.products;
  for (let i = 0; i < initialProductList.length; i++) {
    console.log(initialProductList[i])
    await Product.create(initialProductList[i])
  }
  Sales = db.sales;
  // Generating 200 mock sales for the app
  const numberOfSales = 20000
  for (let i = 0; i < numberOfSales; i++) {
    const productIds = [1, 2, 3, 4];
    const randomQuantities = [1, 2, 3];
    const productPrices = {
      1: 100.0,
      2: 80.0,
      3: 150.0,
      4: 250.0,
    }
    const randomProductId = productIds[Math.floor(Math.random() * productIds.length)]
    const generatedSalesInstance = {
      product_id: randomProductId,
      price: productPrices[randomProductId],
      quantity: randomQuantities[Math.floor(Math.random() * randomQuantities.length)],
      createdAt: generateRandomDateInThePast90Days()
    }
    await Sales.create(generatedSalesInstance)
  }
}
dropAndSync();


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./backend/routes/tutorial.routes.js")(app);
require("./backend/routes/product.routes.js")(app);
require("./backend/routes/sales.routes.js")(app);

// Adding initial product items to table
Product = db.products;

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


