import React from "react";
import { useGetUserQuery } from "../redux/service/user-service";
import UserCard from "../components/user-card";
import { Box, Container, IconButton } from "@mui/material";
import { Grid2 } from "@mui/material";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Form from "../components/form";

const Users = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isFetching } = useGetUserQuery(page);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Form />
      </Box>
      {isLoading || isFetching ? (
        <Grid2 container spacing={2}>
          {Array.from(new Array(4)).map((_, index) => (
            <Grid2 xs={12} sm={6} md={3} key={index}>
              <Skeleton variant="rectangular" width="100px" height={200} />
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <>
          <Grid2 container spacing={2}>
            {data?.data?.map((user) => (
              <Grid2 xs={12} sm={6} md={3} key={user.id}>
                <UserCard {...user} />
              </Grid2>
            ))}
          </Grid2>
        </>
      )}
      <Box sx={{ my: 4 }}>
        {Array(data?.pageSize)
          .fill(null)
          .map((_, index) => (
            <IconButton
              key={index}
              sx={
                page === index + 1 ? { bgcolor: "#1E1E1E", color: "white" } : {}
              }
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
      </Box>
    </Container>
  );
};

export default Users;
