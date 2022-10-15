import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ChangePriceDialog({
  open,
  setChangeProductDialogOpen,
  product,
  setProduct,
}) {
  const [newPrice, setNewPrice] = useState("");
  console.log(product);
  const handleChangeNewPrice = (e) => {
    setNewPrice(e.target.value);
  };
  const handleChangePriceDialogClose = (event) => {
    event.stopPropagation();
    setChangeProductDialogOpen(false);
    setNewPrice("");
  };

  const handleChangePriceOnClick = async (e) => {
    const data = {
      ...product,
      price: parseInt(newPrice),
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
      handleChangePriceDialogClose(e);
    setProduct((prevState) => {
      return {
        ...prevState,
        price: parseInt(newPrice),
      };
    });
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Change Product's List Price</DialogTitle>
      <DialogContent
        sx={{
          width: 300,
          height: 150,
        }}
      >
        <DialogContentText>
          Be gentle.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="New Price"
          variant="standard"
          value={newPrice}
          onChange={handleChangeNewPrice}
          sx={{
            marginTop: 4,
          }}
          InputProps={{ style: { fontSize: 30 } }}
          InputLabelProps={{ style: { fontSize: 30 } }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleChangePriceDialogClose}>Cancel</Button>
        <Button onClick={handleChangePriceOnClick}>Change Price</Button>
      </DialogActions>
    </Dialog>
  );
}
