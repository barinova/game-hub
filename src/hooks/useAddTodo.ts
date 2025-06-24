import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { ToDo } from '@/hooks/useToDos.ts';
import axios from 'axios';
import { CACHE_KEYS_TODOS } from '@/consts.ts';

interface AddToDoContext {
  previousToDo: ToDo[];
}

export const useAddToDo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<ToDo, Error, ToDo, AddToDoContext>({
    mutationFn: (todo: ToDo) =>
      axios
        .post<ToDo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then(res => res.data),
    onSuccess: (savedToDo: ToDo, newToDo: ToDo) => {
      queryClient.setQueryData<ToDo[]>(CACHE_KEYS_TODOS, todos =>
        todos?.map(todo => (todo === newToDo ? savedToDo : todo)),
      );
    },
    onError: (error, newToDo, context?: AddToDoContext) => {
      if (!context) {
        return;
      }

      queryClient.setQueryData<ToDo[]>(CACHE_KEYS_TODOS, context.previousToDo);
    },
    onMutate: (newToDo: ToDo) => {
      const previousToDo =
        queryClient.getQueriesData<ToDo[]>(CACHE_KEYS_TODOS)[0]?.[1] || [];

      queryClient.setQueryData<ToDo[]>(CACHE_KEYS_TODOS, (todos = []) => [
        newToDo,
        ...todos,
      ]);

      onAdd();

      return { previousToDo };
    },
  });
};
