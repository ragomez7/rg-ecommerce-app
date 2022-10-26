import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ChangeProductNameDialog from "../../dialogs/ChangeProductNameDialog";

const ProductSalesInfoTitle = ({ productId, productName }) => {
  const [changeProductNameDialogOpen, setChangeProductNameDialogOpen] =
    useState(false);
  const handleChangeProductNameDialogOpen = (event) => {
    event.stopPropagation();
    setChangeProductNameDialogOpen(true);
  };

  return (
    
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F8F8F8",
          alignItems: "center",
        }}
      >
        <ChangeProductNameDialog open={changeProductNameDialogOpen} setChangeProductNameDialogOpen={setChangeProductNameDialogOpen} productId={productId} productName={productName} />
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          {productName}
        </Typography>
        <IconButton
          onClick={handleChangeProductNameDialogOpen}
          sx={{
            padding: 0,
            marginLeft: 2,
          }}
        >
          <EditIcon
            sx={{
              fontSize: 36,
            }}
          />
        </IconButton>
      </Box>
  
    
  )
};

export default ProductSalesInfoTitle;
