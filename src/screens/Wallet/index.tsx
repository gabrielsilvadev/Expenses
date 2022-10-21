import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Feather'
import { VictoryChart, VictoryHistogram } from 'victory-native'

import { IconButton } from '../../components/IconButton'
import {
  Button,
  CardWallet,
  Chart,
  Container,
  Footer,
  FooterCard,
  Header,
  Label,
  LabelMany,
  ScrollView,
  Title
} from './styles'

export function Wallet() {
  const hide = '****'
  const [buttonHideBalance, setButtonHideBalance] = useState(false)
  const [buttonHide, setButtonHide] = useState(false)
  const data = [
    { x: 0 },
    { x: 1 },
    { x: 1 },
    { x: 2 },
    { x: 3 },
    { x: 4 },
    { x: 4 }
  ]

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
        <Title>Carteira</Title>
        <View style={{ marginRight: '8%' }} />
      </Header>
      <ScrollView>
        <CardWallet>
          <FooterCard>
            <AntDesign name="wallet" size={40} color="#383B43" />
          </FooterCard>
          <Footer>
            <Label>Saldo Disponivel:</Label>
            <Title>
              R$ {!buttonHideBalance ? Number(400).toFixed(2) : hide}{' '}
              <IconButton
                icon={buttonHideBalance ? 'eye-off' : 'eye'}
                onPress={() => setButtonHideBalance(!buttonHideBalance)}
              ></IconButton>
            </Title>
          </Footer>
          <Footer>
            <Label>Salario Mensal:</Label>
            <Title>
              R$ {!buttonHide ? Number(4000).toFixed(2) : hide}{' '}
              <IconButton
                icon={buttonHide ? 'eye-off' : 'eye'}
                onPress={() => setButtonHide(!buttonHide)}
              ></IconButton>
            </Title>
          </Footer>
          <FooterCard style={{ backgroundColor: '#27AE60', borderRadius: 5 }} />
        </CardWallet>
        <Chart>
          <VictoryChart>
            <VictoryHistogram
              style={{
                data: {
                  fill: 'hsl(355, 88%, 67%)',
                  stroke: 'hsl(355, 10%, 25%)'
                }
              }}
              cornerRadius={5}
              data={data}
            />
          </VictoryChart>
        </Chart>
      </ScrollView>
    </Container>
  )
}
