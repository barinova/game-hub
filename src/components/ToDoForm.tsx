import { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import type { ToDo } from '@/hooks/useToDos.ts';

interface AddToDoContext {
  previousToDo: ToDo[];
}

const TodoForm = () => {
  const queryClinet = useQueryClient();

  const addToDo = useMutation<ToDo, Error, ToDo, AddToDoContext>({
    mutationFn: (todo: ToDo) =>
      axios
        .post<ToDo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then(res => res.data),
    onSuccess: (savedToDo: ToDo, newToDo: ToDo) => {
      queryClinet.setQueryData<ToDo[]>(['todos'], todos =>
        todos?.map(todo => (todo === newToDo ? savedToDo : todo)),
      );
    },
    onError: (error, newToDo, context?: AddToDoContext) => {
      if (!context) {
        return;
      }

      queryClinet.setQueryData<ToDo[]>(['todos'], context.previousToDo);
    },
    onMutate: (newToDo: ToDo) => {
      const previousToDo =
        queryClinet.getQueriesData<ToDo[]>(['todos'])[0]?.[1] || [];

      queryClinet.setQueryData<ToDo[]>(['todos'], todos => [
        newToDo,
        ...(todos || []),
      ]);

      if (ref?.current) {
        ref.current.value = '';
      }

      return { previousToDo };
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addToDo.error && (
        <div className="alert alert-danger">{addToDo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={event => {
          event.preventDefault();
          addToDo.mutate({
            id: 0,
            title: ref.current?.value || '',
            completed: false,
            userId: 1,
          });
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button className="btn btn-primary">
            {addToDo.isPending ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
