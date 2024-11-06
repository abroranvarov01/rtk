import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const createBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://localhost:3600",
    headers: {
      Authorization: `Bearer tokennnnnas`,
      "Content-Type": "application/json",
    },
  });
};
