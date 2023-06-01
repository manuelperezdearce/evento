import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoriesState } from '../types/states';

const initialState: CategoriesState = {
    loading: false,
    categories: [],
    error: false,
    errorMessage: '',
};

const getCategories = createAsyncThunk('categories/getCategories', async () => {
    try {
        const res = await axios.get('url');
        return res.data;
    } catch (err) {
        console.error('Error en la peticion', err);
        throw err;
    }
});

const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.error.message;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
    },
});

export { getCategories };
export default CategorySlice.reducer;
