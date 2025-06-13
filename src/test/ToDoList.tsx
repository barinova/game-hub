import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const ToDoList = () => {
  const fetchTodos = () =>
    axios
      .get<ToDo[]>('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.data);
  // .catch(err => setError(err));

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<ToDo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
  //
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      ToDos {todos?.length}
      <ul>
        {todos?.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Not Completed'}
          </li>
        ))}
      </ul>
    </>
  );
};
