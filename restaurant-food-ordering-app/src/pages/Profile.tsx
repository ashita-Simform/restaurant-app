import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import axiosInstance from '../api/axiosInstance';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  padding: 20px;
`;

const WelcomeMessage = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const OrdersTitle = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const OrderCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  padding: 16px;
  margin-bottom: 1rem;
`;

const Profile: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.profile);
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get('/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <ProfileContainer>
      <WelcomeMessage>Welcome, {user?.name || 'Guest'}</WelcomeMessage>
      <OrdersTitle>Your Past Orders</OrdersTitle>
      <Grid container spacing={3}>
        {orders.map((order: any) => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <OrderCard>
              <Typography variant="h6">Order ID: {order.id}</Typography>
              <Typography variant="body2">Date: {new Date(order.date).toLocaleDateString()}</Typography>
              <Typography variant="body2">Total: ${order.total.toFixed(2)}</Typography>
              <Typography variant="body2">Items:</Typography>
              <ul>
                {order.items.map((item: any) => (
                  <li key={item.id}>{item.name} (x{item.quantity})</li>
                ))}
              </ul>
            </OrderCard>
          </Grid>
        ))}
      </Grid>
    </ProfileContainer>
  );
};

export default Profile;