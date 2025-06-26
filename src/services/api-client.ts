import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}

export const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '',
  },
});

export class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig): Promise<FetchResponse<T>> {
    return apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  }
}
