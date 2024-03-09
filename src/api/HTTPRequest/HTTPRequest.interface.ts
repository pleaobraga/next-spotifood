export interface FetchProps {
  method: 'get' | 'post' | 'delete' | 'put' | 'patch'
  url: string
  data?: object
  headers?: object
  signal?: object
}

export interface HTTPRequest {
  fetch<T>(props: FetchProps): Promise<T>
}

export interface CancelableAPIProps {
  signal: object
}
