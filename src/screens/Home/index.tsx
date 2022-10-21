import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { VictoryPie, VictoryTooltip } from 'victory-native'

import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { Cards, Chart, Container, Title } from './styles'

export function Home() {
  const navigation = useNavigation()
  const [data, setData] = useState([
    { x: 'Cats', y: 35, color: 'blue' },
    { x: 'Dogs', y: 40, color: 'red' },
    { x: 'Birds', y: 55, color: 'green' }
  ])
  function toGoExpenses() {
    navigation.navigate('ShowExpenses')
  }
  function toGoLogin() {
    navigation.navigate('Login')
  }
  function toGoWallet() {
    navigation.navigate('Wallet')
  }
  function toGoPix() {
    navigation.navigate('Pix')
  }

  return (
    <Container>
      <Header />
      <Chart>
        <Title>R$ 4000</Title>
        <VictoryPie
          height={350}
          cornerRadius={16}
          data={data}
          animate={{
            duration: 2000,
            easing: 'elasticOut'
          }}
          style={{
            labels: {
              fill: '#fff'
            }
          }}
          colorScale={data.map((c) => c.color)}
          labelComponent={
            <VictoryTooltip
              renderInPortal={false}
              flyoutStyle={{
                stroke: 0,
                fill: ({ datum }) => datum.color
              }}
            />
          }
          innerRadius={80}
        />
      </Chart>
      <Cards>
        <Card text="Pix" icon="send" onPress={() => toGoLogin()} />
        <Card text="Carteira" icon="cash" onPress={() => toGoWallet()} />
        <Card text="Contas" icon="bills" onPress={() => toGoExpenses()} />
      </Cards>
    </Container>
  )
}
