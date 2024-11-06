import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/fetch-base-query";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => "/todos",
    }),
    addUser: build.mutation({
      query: (user) => ({
        url: "/todos",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
