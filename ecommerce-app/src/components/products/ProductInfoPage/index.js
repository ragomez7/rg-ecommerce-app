import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { fetchSales } from "../../../store/sales/salesSlice";
import CustomCard from "./cards/CustomCard";
import QtyInStockCard from "./cards/QtyInStockCard";
import PriceCard from "./cards/PriceCard";
import ProductSalesCard from "./cards/ProductSalesCard";
import { Typography } from "@mui/material";

const ProductPage = () => {
  // const [product, setProduct] = useState();
  // const [unitsSold, setUnitsSold] = useState();
  const params = useParams();
  const id = parseInt(params.productId);
  console.log(`id ${typeof id}`);
  const product = useSelector((state) => {
    return state.products.products.find((product) => product.id === id);
  });
  console.log(`product ${product}`);
  const dispatch = useDispatch();
  const unitsSold = useSelector((state) => state.sales.sales);
  const salesStatus = useSelector((state) => state.sales.status);

  // const getProduct = async () => {
  //   let response = await fetch(`http://localhost:8080/api/products/${id}`);
  //   let data = await response.json();
  //   setProduct(data);
  //   console.log(Object.keys(data));

  //   response = await fetch(`http://localhost:8080/api/sales/product/${id}`);
  //   data = await response.json();
  //   setUnitsSold(data);
  // };
  useEffect(() => {
    if (salesStatus === "idle") {
      dispatch(fetchSales(id));
    }
  }, [id, salesStatus, dispatch]);

  if (product) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: 15,
          paddingTop: 3,
        }}
      >
        <Link to="../admin/manage-products">
          <Button>Back</Button>
        </Link>
        <Box
          component="img"
          src={product.imageUrl}
          sx={{
            height: 700,
            width: 467,
            marginTop: 10,
            // marginLeft: 15,
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            height: 600,
            width: 700,
            marginTop: 10,
            marginLeft: 20,
            paddingTop: 10,
            paddingX: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <PriceCard product={product} />
          <QtyInStockCard qtyInStock={product.qtyInStock} product={product} />
          <CustomCard cardHeader="Product Rating" body="A" />
            <ProductSalesCard unitsSold={unitsSold} productId={id} salesStatus={salesStatus} />
        </Box>
      </Box>
    );
  }
  return <>Loading</>;
};

export default ProductPage;
