import { StackActions, useNavigation } from '@react-navigation/native'
import Lottie from 'lottie-react-native'
import React, { useEffect } from 'react'

import { Container } from './styles'

export function Splash() {
  useEffect(() => {
    nextHome()
  }, [])

  function nextHome() {
    setTimeout(() => navigation.dispatch(StackActions.replace('Login')), 5000)
  }
  const navigation = useNavigation()
  return (
    <Container>
      <Lottie
        autoPlay
        loop={true}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: '30%',
          width: '60%',
          height: '60%'
        }}
        source={require('../../../assets/wallet.json')}
      />
    </Container>
  )
}
