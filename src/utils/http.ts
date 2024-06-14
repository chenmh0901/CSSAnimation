import axios from 'axios'

export interface IHttpOptions<T extends IRequestBody> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  data?: T
}

interface IRequestBody {
  [key: string]: any
}

const baseURL = import.meta.env.VITE_BASE_URL

export async function useHttp<R extends IRequestBody>(options: IHttpOptions<IRequestBody>) {
  const config = {
    method: options.method,
    url: baseURL + options.path,
    data: options.data,
  }
  return axios<R>(config)
}
