import api from '..'
import { IProfile } from './@types'

const getExpensies = async () => {
  return await api.get<IProfile>(`/profile`)
}

export default getExpensies
