import Button from "@mui/material/Button";
const OrderStockButton = ({handleOrderProductsDialogOpen}) => {
    return (
        <Button
            onClick={handleOrderProductsDialogOpen}
            color="primary">
                Order Stock
        </Button>
    )
    
}

export default OrderStockButton;