import Button from "@mui/material/Button";
const changePriceButton = ({handleChangePriceDialogOpen}) => {
    return (
        <Button 
            color="primary"
            onClick={handleChangePriceDialogOpen}>
            Change Price
        </Button>
    )
    
}

export default changePriceButton;