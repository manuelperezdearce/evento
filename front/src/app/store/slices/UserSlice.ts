import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CreateUserState } from '../types/states';
import { TCreateUser, TUser } from '@/app/common/types/commonTypes';

const initialState: CreateUserState = {
    user: null,
    loading: false,
    error: false,
    errorMessage: '',
};

const createUser = createAsyncThunk('user/createUser', async (user: TCreateUser) => {
    try {
        const res = await axios.post('https://backcountry.azurewebsites.net/api/User/UserCreate', user);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.error('Error en la peticion', err);
        throw err;
    }
});

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = false;
                state.errorMessage = '';
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.errorMessage = '';
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMessage = action.error?.message as string;
            });
    },
});

export { createUser };
export default UserSlice.reducer;
