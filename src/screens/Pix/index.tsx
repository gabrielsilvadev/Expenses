import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {View} from 'react-native'
import {Header, Container, Title, Button} from './styles'
import {IconButton} from '../../components/IconButton'

export function Pix() {
 

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
    <Title>Pix</Title>
    <View style={{marginRight: '8%'}}/>
    </Header>
  </Container>
  )
}
