import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { Filters } from '../Filters'
import { Load } from '../Load'
import { Order, OrderProps } from '../Order'
import { Container, Counter, Header, Title } from './styles'

export function Orders() {
  const [isLoading, setIsLoading] = useState(false)
  const [orders, setOrders] = useState<OrderProps[]>([])
  const [status, setStatus] = useState('open')

  return (
    <Container>
      <Filters onFilter={setStatus} />

      <Header>
        <Title>Chamados {status === 'open' ? 'aberto' : 'encerrado'}</Title>
        <Counter>{orders.length}</Counter>
      </Header>

      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Order data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  )
}
