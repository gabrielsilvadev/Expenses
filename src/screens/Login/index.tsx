import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import {
  Button,
  ButtonCadastro,
  Container,
  Footer,
  Form,
  Image,
  InputLogin,
  SubTitle,
  Title,
  TitleCadastro
} from './styles'

export function Login() {
  const navigation = useNavigation()
  const [login, setLogin] = useState(true)

  function handleBack() {
    navigation.goBack()
  }

  const image = {
    wallet: require('../../img/wallet.png')
  }

  return (
    <Container>
      <Image source={image.wallet} />
      {login ? (
        <Footer>
          <SubTitle>Ola, Seja Bem Vindo</SubTitle>
          <InputLogin style={{ marginTop: '20%' }} placeholder="Email" />
          <Button>
            <Title>Login</Title>
          </Button>
          <ButtonCadastro onPress={() => setLogin(!login)}>
            <Form>
              <TitleCadastro style={{ marginLeft: '65%', marginTop: '25%' }}>
                Cadastre-se
              </TitleCadastro>
            </Form>
          </ButtonCadastro>
        </Footer>
      ) : (
        <Footer>
          <SubTitle>Cadastro</SubTitle>
          <InputLogin placeholder="Nome" />
          <InputLogin placeholder="Email" />
          <InputLogin placeholder="Renda" />
          <Button>
            <Title>Cadastro</Title>
          </Button>
          <ButtonCadastro onPress={() => setLogin(!login)}>
            <Form>
              <TitleCadastro style={{ marginLeft: '76%' }}>Login</TitleCadastro>
            </Form>
          </ButtonCadastro>
        </Footer>
      )}
    </Container>
  )
}
