import axios from 'axios'

import { type FetchProps, type HTTPRequest } from './HTTPRequest.interface'

export const axiosFetcher: HTTPRequest = {
  async fetch<T>(configuration: FetchProps): Promise<T> {
    const response = await axios<T>(configuration)
    return response.data
  },
}
