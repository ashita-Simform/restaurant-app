import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/UserSlice';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  color: black;
`;

const StyledTextField = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  font-size: 1rem;
`;

const StyledButton = styled.button`
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

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 20px;
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post('/users/check', { email, password });
      if (response.data.success) {
        dispatch(login(response.data.user));
        navigate('/menu');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <LoginContainer>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <StyledTextField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledButton onClick={handleLogin}>Login</StyledButton>
    </LoginContainer>
  );
};

export default Login;