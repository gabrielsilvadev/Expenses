import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { setToken } from '../../services'
import { TExpense } from '../../services/expense/@types/expense'
import getExpensies from '../../services/expense/getExpensies'
import auth from '../../utils/auth'
import { Expense } from '../Expense'
import { Filters } from '../Filters'
import { Load } from '../Load'
import { Container } from './styles'

export function ListExpenses() {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('?')
  const [expensies, setExpensies] = useState<TExpense[]>([])

  async function fetchExpensies(query = '') {
    setIsLoading(true)
    const { data } = await getExpensies(query)
    setExpensies(data.expensies)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchExpensies(status)
  }, [status])

  useEffect(() => {
    fetchExpensies()
  }, [])

  return (
    <Container>
      <Filters onFilter={setStatus} status={status} />
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
