import React, { useState } from "react";
import CustomCard from "./CustomCard";
import ChangePriceDialog from "../../../dialogs/ChangePriceDialog";

export default function PriceCard({ product, setProduct }) {
  const [changePriceDialogOpen, setChangePriceDialogOpen] = useState(false);
  const handleChangePriceDialogOpen = (event) => {
    console.log(changePriceDialogOpen)
    event.stopPropagation();
    setChangePriceDialogOpen(true);
    console.log(changePriceDialogOpen)
  };

  
  return (
    <>
      <ChangePriceDialog open={changePriceDialogOpen} setChangeProductDialogOpen={setChangePriceDialogOpen} product={product} setProduct={setProduct} />
      <CustomCard cardHeader="Price" body={product.price} handleDialogOpen={handleChangePriceDialogOpen}  />
    </>
  );
}
