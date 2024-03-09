export interface FetchProps {
  method: 'get' | 'post' | 'delete' | 'put' | 'patch'
  url: string
  data?: object
  headers?: object
}

export interface HTTPRequest {
  fetch<T>(props: FetchProps): Promise<T>
}
