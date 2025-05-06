import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, UserProfile } from '../../types';

const initialState: UserState = {
  profile: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.profile = null;
      state.isLoggedIn = false;
    },
    updateProfile: (state, action: PayloadAction<UserProfile>) => {
      if (state.isLoggedIn && state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
  },
});

export const { login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;