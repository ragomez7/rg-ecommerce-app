import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Product({ id, name, description, price, type, imageUrl }) {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `${id}`; 
    navigate(path);
  }

  return (
    <Card
      onClick={routeChange}
      sx={{
        width: 350,
        height: 600,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          src={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
