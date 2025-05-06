import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/images/bg2.jpg';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  color: white;
`;

const WelcomeText = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubText = styled.h6`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ViewMenuButton = styled.button`
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

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <WelcomeText>Welcome to Foodie's Paradise</WelcomeText>
      <SubText>Explore our delicious menu and order your favorite dishes!</SubText>
      <ViewMenuButton onClick={() => navigate('/menu')}>
        View Menu
      </ViewMenuButton>
    </HomeContainer>
  );
};

export default Home;