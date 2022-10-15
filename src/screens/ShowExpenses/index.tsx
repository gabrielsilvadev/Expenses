import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View} from 'react-native'
import {ListExpenses} from '../../components/Expenses'
import Icon from 'react-native-vector-icons/Feather'

import {Header, Container, Title, Button} from './styles'

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
      <Button  onPress={handleBack}>
      <Icon name="chevron-left" size={30} color="#fff"  />
      </Button>
      <Title>Contas</Title>
      <View style={{marginRight: '8%'}}/>
      </Header>
      <ListExpenses  />
    </Container>
  );
}
