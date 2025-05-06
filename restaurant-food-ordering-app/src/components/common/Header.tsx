import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../features/user/UserSlice';
import styled from 'styled-components';

const StyledAppBar = styled.div`
  background-color: #ffd700;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <StyledAppBar>
      <Typography
        variant="h6"
        sx={{ flexGrow: 1, cursor: 'pointer' }}
        onClick={() => navigate('/')}
      >
        Foodie's Paradise
      </Typography>
      <div>
        <StyledButton onClick={() => navigate('/menu')}>Menu</StyledButton>
        <StyledButton onClick={() => navigate('/cart')}>Cart</StyledButton>
        {isLoggedIn ? (
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        ) : (
          <StyledButton onClick={() => navigate('/login')}>Login</StyledButton>
        )}
      </div>
    </StyledAppBar>
  );
};

export default Header;