import React, { useState } from 'react'
import { FlatList } from 'react-native'

import { Load } from '../Load';
import { Filters } from '../Filters';
import { Expense, ExpenseProps } from '../Expense';

import { Container,Counter,Header,Title } from './styles';

export function ListExpenses() {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<ExpenseProps[]>([{id: 4,name: 'Conta de Agua', valor: '40'},{id:8,name: 'Conta de Agua', valor: '40'},{id:9,name: 'Conta de Agua', valor: '40'},{id:23,name: 'Conta de Agua', valor: '40'},{id:75,name: 'Conta de Agua', valor: '40'},]);
  const [status, setStatus] = useState('pending');

  return (
    <Container>
      <Filters onFilter={setStatus} />
      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Expense data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  )
}
