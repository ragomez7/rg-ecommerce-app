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
import ProductSalesInfoTitle from "./ProductSalesInfoTitle";
import { IconButton, Typography } from "@mui/material";


const ProductPage = () => {
  const params = useParams();
  const id = parseInt(params.productId);
  console.log(`id ${typeof id}`);
  const product = useSelector((state) => {
    return state.products.products.find((product) => product.id === id);
  });
  const dispatch = useDispatch();
  const unitsSold = useSelector((state) => state.sales.sales);
  const salesStatus = useSelector((state) => state.sales.status);

  

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
            objectFit: "contain",
          }}
        />
        <Box
          sx={{
            height: 600,
            width: 700,
            marginTop: 10,
            marginLeft: 20,
            paddingTop: 1,
            paddingX: 4,
          }}
        >
          <ProductSalesInfoTitle productId={id} productName={product.name} />
          <Box
            sx={{
              height: 550,
              marginTop: 7,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <PriceCard product={product} />
            <QtyInStockCard product={product} />
            <CustomCard cardHeader="Product Rating" body="A" />
            <ProductSalesCard
              unitsSold={unitsSold}
              productId={id}
              salesStatus={salesStatus}
            />
          </Box>
        </Box>
      </Box>
    );
  }
  return <>Loading</>;
};

export default ProductPage;
