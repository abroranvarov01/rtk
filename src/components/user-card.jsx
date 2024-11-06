import { Card } from "@mui/material";
import React from "react";
import { CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDeleteUserMutation } from "../redux/service/user-service";
import { Link } from "react-router-dom";
import { useEditUserMutation } from "../redux/service/user-service";

const UserCard = (props) => {
  const [deleteProduct] = useDeleteUserMutation();
  const [editProduct] = useEditUserMutation();
  const editFn = (id) => {
    const updatedTitle = prompt("Enter new title");
    const updatedDescription = prompt("Enter new description");
    editProduct({ id, title: updatedTitle, description: updatedDescription });
  };
  const deleteFn = (id) => {
    deleteProduct(id)
      .unwrap()
      .then(() => console.log("deleted"));
  };
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
        <Button onClick={() => deleteFn(props.id)} size="small">
          delete
        </Button>
        <Button
          onClick={() => {
            editFn(props.id);
          }}
          size="small"
        >
          edit
        </Button>
      </CardActions>
      <Link to={`/users/${props.id}`}>
        <Button size="small">Detail</Button>
      </Link>
    </Card>
  );
};

export default UserCard;
