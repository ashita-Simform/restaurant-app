import React from 'react';
import { Typography, List, ListItemText } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { clearCart } from '../features/cart/CartSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CartContainer = styled.div`
  background-color: white;
  color: black;
  min-height: 100vh;
  padding: 20px;
`;

const CartItem = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const TotalPrice = styled.h5`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const CheckoutButton = styled.button`
  background-color: #ffd700;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #ffc107;
  }
`;

const ClearCartButton = styled.button`
  background-color: transparent;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    } else {
      alert('Your cart is empty.');
    }
  };

  return (
    <CartContainer>
      <Typography variant="h3" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity} | Price: $${item.price.toFixed(2)}`}
            />
          </CartItem>
        ))}
      </List>
      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
      <CheckoutButton onClick={handleCheckout}>Proceed to Checkout</CheckoutButton>
      <ClearCartButton onClick={() => dispatch(clearCart())}>Clear Cart</ClearCartButton>
    </CartContainer>
  );
};

export default Cart;