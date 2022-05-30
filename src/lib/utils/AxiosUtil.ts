import Axios, { AxiosInstance, AxiosResponse, Method } from 'axios'

export class AxiosUtil {
  private client: AxiosInstance

  constructor(baseURL: string) {
    this.client = Axios.create({ baseURL })
  }

  sendRequest(endpoint: string, headers?: {}): Promise<AxiosResponse> {
    return this.client.get(endpoint, { headers })
  }

  send(method: Method, endpoint: string, headers?: {}): Promise<AxiosResponse> {
    return this.client({
      method,
      headers,
      url: endpoint
    })
  }
}
