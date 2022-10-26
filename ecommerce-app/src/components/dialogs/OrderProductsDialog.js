import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { addStockToProduct } from "../products/productsSlice";

export default function OrderProductsDialog({
  open,
  setOrderProductsDialogOpen,
  product,
  setProduct,
}) {
  const [extraQuantity, setExtraQuantity] = useState("");
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleChangeExtraQuantity = (e) => {
    setExtraQuantity(e.target.value);
  };
  const handleOrderProductsDialogClose = (event) => {
    event.stopPropagation();
    setOrderProductsDialogOpen(false);
    setExtraQuantity("");
  };

  const handleMakeOrderOnClick = async (event) => {
    dispatch(addStockToProduct({id: product.id, qtyToAdd: parseInt(extraQuantity)}))
    handleOrderProductsDialogClose(event)
  }
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
