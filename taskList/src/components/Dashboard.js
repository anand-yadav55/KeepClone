import React from 'react';
import { Container, Paper } from '@material-ui/core';
import Body from './Body';
import Header from './Header';

export default function Dashboard() {
  return (
    <Container>
      <Body />
      <Header username="anand" />
    </Container>
  );
}
