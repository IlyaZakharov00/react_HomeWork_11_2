import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userPhotoReducer from './slices/UserPhotoSlice'

const rootReducer = combineReducers({
    userPhotoReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch