import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/CartSlice';
import menuReducer from '../features/menu/MenuSlice';
import userReducer from '../features/user/UserSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;