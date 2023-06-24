import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthUserState } from '../types/states';
import { endPoints } from '@/app/common/constants/api';
import Cookies from 'js-cookie';

const initialState: AuthUserState = {
    userData: null,
    token: null,
    loading: false,
    error: false,
    errorMessage: '',
};

interface userLogin {
    email: string;
    password: string;
}

const authenticateUser = createAsyncThunk('auth/authenticateUser', async (user: userLogin) => {
    try {
        const res = await axios.post(endPoints.login, user);
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
                console.log('Cargando Petición');
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    const { id, email, isOrganizator, name } = action.payload.servicio;
                    state.userData = { id, email, isOrganizator, name };
                    state.token = action.payload.token;
                    Cookies.set('token', action.payload.token);
                    console.log('Autenticacion Exitosa');
                    //TODO: redireccionar al dashboard
                } else {
                    state.userData = null;
                }
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.errorMessage = action.error?.message as string;
                state.userData = null;
                console.log(action.error.message);
            });
    },
});

export { authenticateUser };
export default AuthSlice.reducer;
