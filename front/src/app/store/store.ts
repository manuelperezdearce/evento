'use client';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/CategorySlice';
import isLogedReducer from './slices/IsLogedSlice';
import eventsReducer from './slices/EventsSlice';
import AuthReducer from './slices/EventsSlice';
import UserReducer from './slices/EventsSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        isLoged: isLogedReducer,
        events: eventsReducer,
        auth: AuthReducer,
        user: UserReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
