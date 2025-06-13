import { useToDos } from '@/hooks/useToDos.ts';

export const ToDoList = () => {
  const { todos, error, isLoading } = useToDos();

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
