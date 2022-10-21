import { ICreateExpense } from '../../screens/NewExpenses/@types'
import api from '..'
import { ISingleExpense } from './@types'

const createExpense = async (payload: ICreateExpense) => {
  return await api.post<ISingleExpense>('/expense', payload)
}

export default createExpense
