import React from "react";
import CustomCard from "./CustomCard";

export default function ProductSalesCard({ unitsSold, productId, salesStatus }) {
    // const productId = unitsSold?.[0].product_id
  
  return (
    <>
      <CustomCard cardHeader="Total unit sales" body={salesStatus === 'succeeded' ? unitsSold?.length : 'Loading...'} productId={productId}  />
    </>
  );
}
