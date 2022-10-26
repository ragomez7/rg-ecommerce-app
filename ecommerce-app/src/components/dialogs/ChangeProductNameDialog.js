import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { updateProductName } from "../products/productsSlice";


export default function ChangeProductNameDialog({
  open,
  setChangeProductNameDialogOpen,
  productId,
  productName,
}) {
  const dispatch = useDispatch()
  const [newProductName, setNewProductName] = useState(productName);
  const handleChangeNewProductName = (e) => {
    setNewProductName(e.target.value);
  };
  const handleChangeProductNameDialogClose = (event) => {
    event.stopPropagation();
    setChangeProductNameDialogOpen(false);
  };

  const handleChangeProductNameOnClick = (event) => {
    dispatch(updateProductName({id: productId, newProductName: newProductName}))
    handleChangeProductNameDialogClose(event)
  }

  return (
    <Dialog open={open}>
      <DialogTitle>Change Product's Name</DialogTitle>
      <DialogContent
        sx={{
          width: 300,
          height: 150,
        }}
      >
        <DialogContentText>
          Remember naming best practices.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="newproductname"
          label="New Product Name"
          variant="standard"
          value={newProductName}
          onChange={handleChangeNewProductName}
          sx={{
            marginTop: 4,
          }}
          InputProps={{ style: { fontSize: 30 } }}
          InputLabelProps={{ style: { fontSize: 30 } }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleChangeProductNameDialogClose}>Cancel</Button>
        <Button onClick={handleChangeProductNameOnClick}>Change Name</Button>
      </DialogActions>
    </Dialog>
  );
}
