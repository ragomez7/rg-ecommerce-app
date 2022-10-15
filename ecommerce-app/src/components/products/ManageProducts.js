import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { resetSales } from "../../store/sales/salesSlice";
import AddProductDialog from "../dialogs/AddProductDialog";
import Product from "./ProductTile";

const ManageProducts = () => {
  const [addProductDialogOpen, setAddProductDialogOpen] = useState(false);
  // let [products, setProducts] = useState([]);

  const handleAddProductDialogOpen = (event) => {
    event.stopPropagation();
    setAddProductDialogOpen(true);
  };

  const dispatch = useDispatch()

  // const getAllProducts = async () => {
  //   const response = await fetch("http://localhost:8080/api/products");
  //   const data = await response.json();
  //   console.log(data);
  //   setProducts(data);
  //   return data;
  // };

  // useEffect(() => {
  //   getAllProducts();
  // }, [])

  const products = useSelector((state) => state.products.products);
  dispatch(resetSales())

  return (
    <>
      <AddProductDialog
        open={addProductDialogOpen}
        setAddProductDialogOpen={setAddProductDialogOpen}
        // setProducts={setProducts}
      />
      <Box
        sx={{
          paddingTop: 7,
          paddingX: 25,
        }}
      >
        <Link to="../admin">
          <Button>Back</Button>
        </Link>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: 26,
            paddingBottom: 6,
            marginTop: 4,
          }}
        >
          Products
        </Typography>
        <Grid container spacing={2}>
          {products.map((product) => {
            return (
              <Grid key={product.id + product.name} item xs={4}>
                <Product
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  type={product.type}
                  imageUrl={product.imageUrl}
                />
              </Grid>
            );
          })}
        </Grid>

        <Button onClick={handleAddProductDialogOpen}>Add Product</Button>
      </Box>
    </>
  );
};

export default ManageProducts;
