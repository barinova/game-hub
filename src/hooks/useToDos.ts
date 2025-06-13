import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

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
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
  return { todos, error, isLoading };
};
