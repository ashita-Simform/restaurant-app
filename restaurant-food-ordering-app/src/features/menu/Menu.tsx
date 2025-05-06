import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { MenuItem } from '../../types';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import styled from 'styled-components';

const MenuFeatureContainer = styled.div`
  padding: 20px;
  background-color: white;
  color: black;
`;

const MenuItemCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AddToCartButton = styled.button`
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

const Menu: React.FC = () => {
    const menuItems = useSelector((state: RootState) => state.menu.items);

    const handleAddToCart = (item: MenuItem) => {
        // Add to cart logic here
    };

    return (
        <MenuFeatureContainer>
            {menuItems.map((item: MenuItem) => (
                <MenuItemCard key={item.id}>
                    <Typography variant="h5">{item.name}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                    <Typography variant="h6">${item.price.toFixed(2)}</Typography>
                    <AddToCartButton onClick={() => handleAddToCart(item)}>
                        Add to Cart
                    </AddToCartButton>
                </MenuItemCard>
            ))}
        </MenuFeatureContainer>
    );
};

export default Menu;