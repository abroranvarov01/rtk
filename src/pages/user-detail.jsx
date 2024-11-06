import React from "react";
import { useGetUserByIdQuery } from "../redux/service/user-service";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const UserDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetUserByIdQuery(id);

  return (
    <div>
      <Container>
        {isLoading ? (
          <Box>
            <Skeleton variant="text" width="60%" height={40} />
            <Skeleton variant="text" width="80%" />
          </Box>
        ) : (
          <>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </>
        )}
      </Container>
    </div>
  );
};

export default UserDetail;
