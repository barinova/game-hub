import axios from 'axios';
import type { ToDo } from '@/hooks/useToDos.ts';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    return axiosInstance.get<T[]>(this.endpoint).then(resp => resp.data);
  }

  post<T>(data: T) {
    return axiosInstance.post<T>(this.endpoint, data).then(resp => resp.data);
  }
}
