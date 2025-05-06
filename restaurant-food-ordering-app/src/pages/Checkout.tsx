import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import bgImage from '../assets/images/bg5.jpeg';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  color: black;
`;

const OrderSummary = styled.div`
  background-color: #ffffffcc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PlaceOrderButton = styled.button`
  margin-top: 20px;
  background-color: #ffd700;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffc107;
  }
`;

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log('Checkout items:', cartItems);
    navigate('/');
  };

  return (
    <CheckoutContainer>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'black' }}>
        Checkout
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
            Selected Items
          </Typography>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    backgroundColor: '#f9f9f9',
                    color: 'black',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                >
                 
                  <CardContent>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2">Quantity: {item.quantity}</Typography>
                    <Typography variant="body2">Price: ${item.price.toFixed(2)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderSummary>
            <Typography variant="h5" gutterBottom>
              Order Summary
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Items: {cartItems.length}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Total Price: ${totalPrice.toFixed(2)}
            </Typography>
            <PlaceOrderButton onClick={handleCheckout}>
              Place Order
            </PlaceOrderButton>
          </OrderSummary>
        </Grid>
      </Grid>
    </CheckoutContainer>
  );
};

export default Checkout;