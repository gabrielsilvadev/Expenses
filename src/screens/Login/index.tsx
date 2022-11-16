import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

import { setToken } from '../../services'
import performLogin from '../../services/auth/login'
import { ErrorMessage, SuccessMessage } from '../../styles/alerts'
import auth from '../../utils/auth'
import * as S from './styles'

export function Login() {
  const navigation = useNavigation()

  const [login, setLogin] = useState(true)
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const [email, setEmail] = useState('')

  function handleBack() {
    navigation.goBack()
  }

  async function handleLogin() {
    const { data } = await performLogin(email)
    if (data.success) {
      setError(undefined)
      setSuccess('Login realizado com successo!')
      auth.access_token = data.auth.access_token
      auth.refresh_token = data.auth.refresh_token
      setToken(auth.access_token)
      navigation.navigate('Main')
    } else {
      setError('Email inválido!')
      setSuccess(undefined)
    }
  }

  const image = {
    wallet: require('../../img/wallet.png')
  }

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined

    if (error) {
      intervalId = setTimeout(() => {
        setError(undefined)
      }, 5000)
    } else if (success) {
      intervalId = setTimeout(() => {
        setSuccess(undefined)
      }, 5000)
    }

    return () => {
      if (intervalId) {
        clearTimeout(intervalId)
      }
    }
  }, [error, success])

  return (
    <S.Container>
      <S.Image source={image.wallet} />
      {login ? (
        <S.Footer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
          <S.FooterTitle>Ola, Seja Bem Vindo</S.FooterTitle>
          <S.TextInput
            placeholder="expensies@user.com"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />
          <S.ButtonContainer>
            <S.Button onPress={() => handleLogin()}>
              <S.ButtonText>Login</S.ButtonText>
            </S.Button>
            <S.RegisterButton onPress={() => setLogin(!login)}>
              <S.RegisterButtonText>Cadastre-se</S.RegisterButtonText>
            </S.RegisterButton>
          </S.ButtonContainer>
        </S.Footer>
      ) : (
        <S.Footer>
          <S.FooterTitle>Cadastro</S.FooterTitle>
          <S.TextInput placeholder="Nome" />
          <S.TextInput placeholder="Email" />
          <S.TextInput placeholder="Renda" />

          <S.ButtonContainer>
            <S.Button>
              <S.ButtonText>Cadastro</S.ButtonText>
            </S.Button>
            <S.RegisterButton onPress={() => setLogin(!login)}>
              <S.RegisterButtonText>Login</S.RegisterButtonText>
            </S.RegisterButton>
          </S.ButtonContainer>
        </S.Footer>
      )}
    </S.Container>
  )
}
