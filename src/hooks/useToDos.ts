import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS_TODOS } from '@/consts.ts';

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useToDos = (): { todos; error: Error; isLoading } => {
  const fetchTodos = () =>
    axios
      .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.data);

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<ToDo[], Error>({
    queryKey: CACHE_KEYS_TODOS,
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 10, // 10 seconds
  });
  return { todos, error, isLoading };
};
