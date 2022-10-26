import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'

import image from '../../img/profile.png'
import { Card, CardUser, Container, Header, Image, Title } from './styles'

export function User() {
  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header style={{ marginTop: '-50%' }}>
        <Title style={{ fontWeight: 'bold' }}>Perfil</Title>
        <View style={{ marginRight: '8%' }} />
      </Header>
      <Card>
        <CardUser>
          <Image source={image} />
          <Title>User name</Title>
        </CardUser>
        <CardUser>
          <Title>Email: gabrielSilva@</Title>
        </CardUser>
        <CardUser>
          <Title>Salario: R$4000</Title>
        </CardUser>
      </Card>
    </Container>
  )
}
