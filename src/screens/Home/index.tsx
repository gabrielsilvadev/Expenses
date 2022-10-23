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
    { x: 'conta de luz', y: 35, color: '#267365' },
    { x: 'conta agua', y: 70, color: '#F2CB05' },
    { x: 'internet', y: 55, color: '#F29F05' }
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
  function ativeToolTip() {
    setTimeout()
  }

  return (
    <Container>
      <Header />
      <Chart>
        <Title>R$ 4000</Title>
        <VictoryPie
          height={370}
          cornerRadius={18}
          data={data}
          animate={{
            duration: 4000,
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
                fill: ({ datum }) => datum.color,
                alignContent: 'center',
                textAlign: 'center',
                padding: '7%'
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
