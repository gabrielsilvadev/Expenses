import { Axios, AxiosRequestConfig } from 'axios'

import { HTTP_METHODS, IClient } from '../@types/client'

class AxiosClient extends Axios implements IClient {
  baseURL: string
  token?: string
  methods: HTTP_METHODS[]

  constructor(baseURL: string, token?: string) {
    const _config: AxiosRequestConfig = {
      baseURL,
      headers: {
        authorization: `Bearer ${token}`
      },
      transformResponse: [(res) => JSON.parse(res)]
    }
    super(_config)

    this.baseURL = baseURL
    this.token = token
  }
}

export default AxiosClient
