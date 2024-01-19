import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "/",
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
