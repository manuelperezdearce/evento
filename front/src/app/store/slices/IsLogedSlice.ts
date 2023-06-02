import { createSlice } from '@reduxjs/toolkit';

type TLogin = {
    isLoged: boolean;
};

const initialState: TLogin = {
    isLoged: false,
};

const IsLogedSlice = createSlice({
    name: 'isLoged',
    initialState,
    reducers: {
        toggleLogin: (state) => {
            state.isLoged = !state.isLoged;
        },
    },
});

export const { toggleLogin } = IsLogedSlice.actions;
export default IsLogedSlice.reducer;
