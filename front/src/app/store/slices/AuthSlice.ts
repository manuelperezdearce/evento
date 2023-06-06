import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthUserState } from '../types/states';

const initialState: AuthUserState = {
    user: null,
    loading: false,
    error: false,
    errorMessage: '',
};

const authenticateUser = createAsyncThunk('auth/authenticateUser', async (user) => {
    try {
        const res = await axios.post('url', user);
        return res.data;
    } catch (err) {
        throw new Error('Error en la autenticacion de usuario');
    }
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authenticateUser.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMessage = '';
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.user = action.payload;
                } else {
                    state.user = null;
                }
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMessage = action.error?.message as string;
                state.user = null;
            });
    },
});

export { authenticateUser };
export default AuthSlice.reducer;
