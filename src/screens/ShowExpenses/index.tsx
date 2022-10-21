import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { ListExpenses } from '../../components/Expenses'
import { TExpense } from '../../services/expense/@types/expense'
import getExpensies from '../../services/expense/getExpensies'
import { Button, Container, Header, Title } from './styles'

export function ShowExpenses() {
  const [isLoading, setIsLoading] = useState(false)
  const [patrimony, setPatrimony] = useState('')
  const [equipment, setEquipment] = useState('')
  const [description, setDescription] = useState('')

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
