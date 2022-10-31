import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { VictoryPie, VictoryTooltip } from 'victory-native'

import { Card } from '../../components/Card'
import { Header } from '../../components/Header'
import { TExpense } from '../../services/expense/@types/expense'
import getExpensies from '../../services/expense/getExpensies'
import { TProfile } from '../../services/profile/@types/profile'
import getUser from '../../services/profile/getUser'
import { Cards, Chart, Container, Title } from './styles'

export function Home() {
  const navigation = useNavigation()
  const [data, setData] = useState([])
  const [expensies, setExpensies] = useState<TExpense[]>([])
  const [user, setUser] = useState<TProfile>({})
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

  async function fetchExpensies() {
    const user = await getUser()
    setUser(user.data.profile)
    const { data } = await getExpensies()
    setExpensies(data.expensies)
    await convertExpenses(expensies)
  }

  function convertExpenses(data: TExpense[]) {
    const expenseGraphic = []
    console.log('ok')
    let acc = Number(user.salary)
    data.map((expense) => {
      const calc = acc - Number(expense.value)
      console.log(calc)
      const value = Math.abs((acc - calc) / 100)

      acc = Math.sign(calc) === -1 ? 0 : calc

      expenseGraphic.push({
        x: expense.name,
        y: value,
        color: expense.color
      })
    })

    expenseGraphic.push({ x: 'Valor disponivel', y: acc, color: 'green' })
    setData(expenseGraphic)
  }

  useEffect(() => {
    fetchExpensies()
  }, [])

  return (
    <Container>
      <Header />
      <Chart>
        <Title>R$ {user.salary}</Title>
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
