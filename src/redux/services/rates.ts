import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Rate } from 'types'

type Response = {
  [0]: {
    table: string,
    rates: Rate[],
  }
}

export const ratesApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    getRates: builder.query<Rate[], void>({
      query: () => 'b?format=json',
      transformResponse: (response: Response) => response[0].rates,
    }),
  }),
})

export const {
  useGetRatesQuery,
} = ratesApi
