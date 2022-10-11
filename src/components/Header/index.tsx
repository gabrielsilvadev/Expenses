import React from 'react';

import Icon from 'react-native-vector-icons/Feather'
import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {

  return (
    <Container>
      <Greeting>
        <Title>Dashboard</Title>
        <SubTitle>Organize suas financas.</SubTitle>
      </Greeting>
      <Icon name="bell"  size={40} color="#4B5563"/>
    </Container>
  );
}
