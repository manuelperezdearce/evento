import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { eventsState } from '../types/states';

const initialState: eventsState = {
    loading: false,
    error: false,
    errorMessage: '',
    events: [],
};

const getEvents = createAsyncThunk('events/getEvents', async () => {
    try {
        const res = await axios.get('url');
        return res.data;
    } catch (err) {
        throw new Error('Error en la peticion');
    }
});

const addEvent = createAsyncThunk('events/addEvent', async (event) => {
    try {
        const res = await axios.post('url', event);
        return res.data;
    } catch (err) {
        throw new Error('Error al agregar el evento');
    }
});

const updateEvent = createAsyncThunk('events/updateEvent', async (updatedEvent) => {
    try {
        const res = await axios.put('url', updatedEvent);
        return res.data;
    } catch (err) {
        throw new Error('Error al actualizar el evento');
    }
});

const EventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
                state.error = false;
                state.errorMessage = '';
            })
            .addCase(addEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.events = action.payload;
                state.error = false;
                state.errorMessage = '';
            })
            .addCase(updateEvent.fulfilled, (state, action) => {
                const updatedItem = action.payload;
                const index = state.events.findIndex(
                    (item) => item.id === updatedItem.id
                );
                if (index !== -1) {
                    state.events[index] = updatedItem;
                }
                state.loading = false;
                state.error = false;
                state.errorMessage = '';
            })
            .addMatcher(
                (action) =>
                    action.type.endsWith('/pending') && action.type.startsWith('events/'),
                (state) => {
                    state.loading = true;
                    state.error = false;
                    state.errorMessage = '';
                }
            )
            .addMatcher(
                (action) =>
                    action.type.endsWith('/rejected') &&
                    action.type.startsWith('events/'),
                (state, action) => {
                    state.loading = false;
                    state.error = true;
                    state.errorMessage = action.error.message;
                }
            );
    },
});

export { getEvents, addEvent, updateEvent };
export default EventsSlice.reducer;
