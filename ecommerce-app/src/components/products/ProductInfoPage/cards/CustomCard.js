import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import ChangePriceButton from "../../../buttons/ChangePriceButton";
import OrderStockButton from "../../../buttons/OrderStockButton";
import ViewSalesButton from "../../../buttons/ViewSalesButton";

export default function CustomCard({ cardHeader, body, handleDialogOpen, productId = undefined }) {
  const CustomCardButton = () => {
    switch (cardHeader) {
      case "Price":
        return (
          <ChangePriceButton handleChangePriceDialogOpen={handleDialogOpen} />
        );
      case "Qty in Stock":
        return (
          <OrderStockButton handleOrderProductsDialogOpen={handleDialogOpen} />
        );
      case "Total unit sales":
        return (
          <ViewSalesButton productId={productId} />
        );
      default:
        return <></>;
    }
  };
  return (
    <Card
      sx={{
        width: 300,
        height: 200,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            {cardHeader}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CustomCardButton />
      </CardActions>
    </Card>
  );
}
