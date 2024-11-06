import React from "react";
import { useGetUserQuery } from "../redux/service/user-service";
import UserCard from "../components/user-card";
import { Box, Container } from "@mui/material";
import { Grid2 } from "@mui/material";
import Form from "../components/form";

const Users = () => {
  const { data, isLoading } = useGetUserQuery();
  return (
    <div>
      <Container>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Box>
            <Box sx={{ my: 4 }}>
              <Form />
            </Box>
            <Grid2 container spacing={2}>
              {data?.map((user) => (
                <Grid2 item xs={12} sm={6} md={3} key={user.id}>
                  <UserCard {...user} />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Users;
