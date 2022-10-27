import api from '..'
import { IMultipleExpensies } from './@types'

const getExpensies = async (query = '') => {
  return await api.get<IMultipleExpensies>(`/expense/${query}`)
}

export default getExpensies
