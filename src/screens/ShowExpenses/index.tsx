import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { ListExpenses } from '../../components/Expenses'
import { Button, Container, Header, Title } from './styles'

export function ShowExpenses() {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <Button onPress={handleBack}>
          <Icon name="chevron-left" size={30} color="#fff" />
        </Button>
        <Title>Contas</Title>
        <View style={{ marginRight: '9%' }} />
      </Header>
      <ListExpenses />
    </Container>
  )
}
