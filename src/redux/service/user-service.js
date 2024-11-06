import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/fetch-base-query";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  refetchOnFocus: true,
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getUser: build.query({
      query: (page = 1) => ({
        url: "/todos",
        params: { _limit: 4, _page: page },
      }),
      transformResponse: (data, res) => {
        let countSize = res?.response?.headers.get("X-Total-Count");
        if (countSize % 4 != 0) {
          return {
            data,
            pageSize: Math.round((Number(countSize) + 1) / 4),
          };
        }

        return {
          data,
          pageSize: Math.round(Number(countSize) / 4),
        };
      },
      providesTags: ["User"],
    }),
    addUser: build.mutation({
      query: (user) => ({
        url: "/todos",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    editUser: build.mutation({
      query: (user) => ({
        url: `/todos/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    getUserById: build.query({
      query: (id) => ({
        url: `/todos/${id}`,
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
  useGetUserByIdQuery,
} = userApi;
