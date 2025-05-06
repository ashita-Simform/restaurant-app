import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchMenuItems } from '../features/menu/MenuSlice';
import { addItem } from '../features/cart/CartSlice';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background-color: white;
  color: black;
  min-height: 100vh;
  padding: 20px;
`;

const MenuCard = styled.div`
  background-color: #f9f9f9;
  color: black;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuCardMedia = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
`;

const MenuCardContent = styled.div`
  padding: 16px;
`;

const AddToCartButton = styled.button`
  margin-top: 10px;
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

const Menu: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const menuItems = useSelector((state: RootState) => state.menu.items);
  const loading = useSelector((state: RootState) => state.menu.loading);
  const error = useSelector((state: RootState) => state.menu.error);
  const [notification, setNotification] = React.useState(false);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const handleAddToCart = (item: any) => {
    dispatch(addItem({
      id: item.id, name: item.name, price: item.price, quantity: 1,
      image: undefined
    }));
    setNotification(true);
  };

  const handleCloseNotification = () => {
    setNotification(false);
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <MenuContainer>
      <Typography variant="h3" gutterBottom>
        Our Menu
      </Typography>
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MenuCard>
              <MenuCardMedia src={item.image} alt={item.name} />
              <MenuCardContent>
                <Typography variant="h5" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Category:</strong> {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <strong>Price:</strong> ${item.price}
                </Typography>
                <AddToCartButton onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </AddToCartButton>
              </MenuCardContent>
            </MenuCard>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={notification}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity="success" sx={{ width: '100%' }}>
          Item added to cart successfully!
        </Alert>
      </Snackbar>
    </MenuContainer>
  );
};

export default Menu;