import type { Genre } from '@/hooks/UseGenres.ts';
import type { Platform } from '@/hooks/UseGames.ts';
import { PostList } from '@/components/PostList.tsx';
import ToDoForm from '@/components/ToDoForm.tsx';
import { ToDoList } from '@/components/ToDoList.tsx';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  return (
    <>
      <ToDoForm></ToDoForm>
      <ToDoList></ToDoList>
    </>
  );
}

export default App;
