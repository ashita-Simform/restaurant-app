import React from 'react';
import Header from '../common/Header';
import { Box } from '@mui/material';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentArea>{children}</ContentArea>
    </LayoutContainer>
  );
};

export default MainLayout;