import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Checkout from '../pages/Checkout';
import MainLayout from '../components/layout/MainLayout';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

const AppRoutes: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

    return (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route
                        path="/checkout"
                        element={isLoggedIn ? <Checkout /> : <Navigate to="/login" replace />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
    );
};

export default AppRoutes;