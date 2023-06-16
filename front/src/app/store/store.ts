'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/CategorySlice';
import isLogedReducer from './slices/IsLogedSlice';
import eventsReducer from './slices/EventsSlice';
import AuthReducer from './slices/AuthSlice';
import UserReducer from './slices/UserSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    auth: AuthReducer,
    user: UserReducer,
    events: eventsReducer,
    isLoged: isLogedReducer,
    category: categoryReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
