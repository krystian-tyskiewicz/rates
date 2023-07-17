import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { ratesApi } from './services/rates'

const rootReducer = combineReducers({
  api: ratesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ratesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
