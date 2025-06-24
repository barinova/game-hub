import { ApiClient } from '@/services/api-client.ts';
import type { ToDo } from '@/hooks/useToDos.ts';

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const toDoClient = new ApiClient<ToDo>('/todos');
