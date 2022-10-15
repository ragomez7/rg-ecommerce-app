import React, { useState } from "react";
import CustomCard from "./CustomCard";
import OrderProductsDialog from "../../../dialogs/OrderProductsDialog";

export default function QtyInStockCard({ qtyInStock, product, setProduct }) {
  const [addOrderProductsDialogOpen, setOrderProductsDialogOpen] = useState(false);
  const handleOrderProductsDialogOpen = (event) => {
    console.log(addOrderProductsDialogOpen)
    event.stopPropagation();
    setOrderProductsDialogOpen(true);
    console.log(addOrderProductsDialogOpen)
  };

  
  return (
    <>
      <OrderProductsDialog open={addOrderProductsDialogOpen} setOrderProductsDialogOpen={setOrderProductsDialogOpen} product={product} setProduct={setProduct} />
      <CustomCard cardHeader="Qty in Stock" body={qtyInStock} handleDialogOpen={handleOrderProductsDialogOpen}  />
    </>
  );
}
