import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { Load } from '../Load';
import { Filters } from '../Filters';
import { Expense } from '../Expense';

import { Container } from './styles';
import { TExpense } from '../../services/expense/@types/expense';
import getExpensies from '../../services/expense/getExpensies';

export function ListExpenses() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('pago');
  const [expensies, setExpensies] = useState<TExpense[]>([])

  async function fetchExpensies() {
    const { data } = await getExpensies()
    setExpensies(data.expensies)
  }

  useEffect(() => {
    fetchExpensies()
  }, [])

  return (
    <Container>
      <Filters onFilter={setStatus} status={''} />
      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={expensies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Expense data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  )
}
