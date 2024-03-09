import axios from 'axios'

import { Fetcher } from './fetcher.interface'

export const axiosFetcher: Fetcher = {
  async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url)
    return response.data
  },

  async post<T, U>(url: string, data: U): Promise<T> {
    const response = await axios.post<T>(url, data)
    return response.data
  },
}
