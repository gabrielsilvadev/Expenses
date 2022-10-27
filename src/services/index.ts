import { IClient } from '../utils/api/@types/client'
// import AxiosClient from "../utils/api/impl/axios";
import FetchClient from '../utils/api/impl/fetch'
import auth from '../utils/auth'

const getClient = (): IClient =>
  new FetchClient('https://expensies-api.herokuapp.com')

const api = getClient()

export default api
