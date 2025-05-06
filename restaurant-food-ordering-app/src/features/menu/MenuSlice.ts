import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../../api/axiosInstance';
import { MenuItem, MenuState } from '../../types';

const initialState: MenuState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async () => {
  const response = await axios.get('/menu');
  return response.data.menu;
});

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    clearMenu: (state) => {
      state.items = [];
      state.error = null;
    },
    setMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch menu items';
      });
  },
});

export const { clearMenu, setMenu } = menuSlice.actions;

export default menuSlice.reducer;