'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/CategorySlice';
import isLogedReducer from './slices/IsLogedSlice';
import eventsReducer from './slices/EventsSlice';
import AuthReducer from './slices/AuthSlice';
import UserReducer from './slices/UserSlice';

const rootReducer = combineReducers({
    category: categoryReducer,
    isLoged: isLogedReducer,
    events: eventsReducer,
    auth: AuthReducer,
    user: UserReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
