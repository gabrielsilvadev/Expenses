import api from '..'
import { IMultipleExpensies } from './@types'

const getExpensies = async () => {
  return await api.get<IMultipleExpensies>('/expense/')
}

export default getExpensies
