import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const ViewSalesButton = ({productId}) => {
    return (
        <Button 
            color="primary">
            <Link to={`/admin/manage-products/sales/${productId}`}>View Sales</Link>
        </Button>
    )
    
}

export default ViewSalesButton;