import React, { useState } from "react";
import CustomCard from "./CustomCard";
import OrderProductsDialog from "../../../dialogs/OrderProductsDialog";

export default function QtyInStockCard({ qtyInStock, product, setProduct }) {
  const [addOrderProductsDialogOpen, setOrderProductsDialogOpen] = useState(false);
  const handleOrderProductsDialogOpen = (event) => {
    event.stopPropagation();
    setOrderProductsDialogOpen(true);
  };

  
  return (
    <>
      <OrderProductsDialog open={addOrderProductsDialogOpen} setOrderProductsDialogOpen={setOrderProductsDialogOpen} product={product} setProduct={setProduct} />
      <CustomCard cardHeader="Qty in Stock" body={product.qtyInStock} handleDialogOpen={handleOrderProductsDialogOpen}  />
    </>
  );
}
