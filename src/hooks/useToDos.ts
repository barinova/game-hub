import { useQuery } from '@tanstack/react-query';
import { CACHE_KEYS_TODOS } from '@/consts.ts';
import { toDoClient } from '@/services/todoService.ts';

export const useToDos = (): { todos; error: Error; isLoading } => {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<ToDo[], Error>({
    queryKey: CACHE_KEYS_TODOS,
    queryFn: () => toDoClient.getAll(),
    staleTime: 1000 * 60 * 10, // 10 seconds
  });
  return { todos, error, isLoading };
};
