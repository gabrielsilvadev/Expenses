import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Feather'

import { IconButton } from '../../components/IconButton'
import { Button, Container, Header, Title } from './styles'

export function Pix() {
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
        <Title>Pix</Title>
        <View style={{ marginRight: '8%' }} />
      </Header>
    </Container>
  )
}
