import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function OrderProductsDialog({
  open,
  setOrderProductsDialogOpen,
  product,
  setProduct,
}) {
  const [extraQuantity, setExtraQuantity] = useState("");
  const [loading, setIsLoading] = useState(false);
  console.log(product);
  const handleChangeExtraQuantity = (e) => {
    setExtraQuantity(e.target.value);
  };
  const handleOrderProductsDialogClose = (event) => {
    event.stopPropagation();
    setOrderProductsDialogOpen(false);
    setExtraQuantity("");
  };

  const handleMakeOrderOnClick = async (e) => {
    setIsLoading(true);
    const newQtyInStock = product.qtyInStock + parseInt(extraQuantity);
    const data = {
      ...product,
      qtyInStock: newQtyInStock,
    };
    fetch(`http://localhost:8080/api/products/${product.id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    handleOrderProductsDialogClose(e);
    setIsLoading(false);
    setProduct((prevState) => {
      return {
        ...prevState,
        qtyInStock: newQtyInStock,
      };
    });
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Order Products to Factory</DialogTitle>
      <DialogContent
        sx={{
          width: 300,
          height: 150,
        }}
      >
        <DialogContentText>
          This is a simulation so you'll get it immediately.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="quantity"
          label="Quantity"
          variant="standard"
          value={extraQuantity}
          onChange={handleChangeExtraQuantity}
          sx={{
            marginTop: 4,
          }}
          InputProps={{ style: { fontSize: 30 } }}
          InputLabelProps={{ style: { fontSize: 30 } }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOrderProductsDialogClose}>Cancel</Button>
        <Button onClick={handleMakeOrderOnClick}>Order</Button>
      </DialogActions>
    </Dialog>
  );
}
