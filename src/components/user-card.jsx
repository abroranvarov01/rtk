import { Card } from "@mui/material";
import React from "react";
import { CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UserCard = (props) => {
  return (
    <Card sx={{ bgcolor: "#1E1E1E", maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography color="white" gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">delete</Button>
        <Button size="small">edit</Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
