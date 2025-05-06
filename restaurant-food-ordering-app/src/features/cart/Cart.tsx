import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import styled from 'styled-components';

const CartFeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  color: black;
`;

const CartItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const CartTotal = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  background-color: #ffd700;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #ffc107;
  }
`;

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const handleCheckout = () => {};

    return (
        <CartFeatureContainer>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CartItemRow key={item.id}>
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </CartItemRow>
                    ))}
                    <CartTotal>Total: ${totalPrice.toFixed(2)}</CartTotal>
                    <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
                </>
            )}
        </CartFeatureContainer>
    );
};

export default Cart;