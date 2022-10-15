import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addProduct } from "../products/productsSlice";

export default function AddProductDialog({
  open,
  setAddProductDialogOpen,
  setProducts,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  
  const dispatch = useDispatch()

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleAddProductDialogClose = (event) => {
    event.stopPropagation();
    setAddProductDialogOpen(false);
  };
  const handleAddProductOnClick = () => {
    dispatch(addProduct({
      name,
      description,
      price,
      type,
      qtyInStock: 0,
      imageUrl: ''
    }))
    setAddProductDialogOpen(false)
  }
  // const handleAddProductOnClick = async (e) => {
  //   const data = {
  //     name: name,
  //     description: description,
  //     price: price,
  //     type: type,
  //   };
  //   fetch("http://localhost:8080/api/products", {
  //     method: "POST", // or 'PUT'
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "http://localhost:8080",
  //       "Access-Control-Allow-Credentials": "true",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   handleAddProductDialogClose(e);
  //   setProducts((prevState) => (
  //     [...prevState,
  //     data]
  //   ))
  // };
  return (
    <Dialog open={open}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          variant="standard"
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Description"
          fullWidth
          variant="standard"
          value={description}
          onChange={handleChangeDescription}
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Price"
          fullWidth
          variant="standard"
          value={price}
          onChange={handleChangePrice}
        />
        <TextField
          autoFocus
          margin="dense"
          id="type"
          label="Type"
          fullWidth
          variant="standard"
          value={type}
          onChange={handleChangeType}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddProductDialogClose}>Cancel</Button>
        <Button onClick={handleAddProductOnClick}>Add Product</Button>
      </DialogActions>
    </Dialog>
  );
}
