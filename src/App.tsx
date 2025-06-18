import type { Genre } from '@/hooks/UseGenres.ts';
import type { Platform } from '@/hooks/UseGames.ts';
import { PostList } from '@/components/PostList.tsx';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  return (
    <>
      <h3>Posts</h3>
      <PostList></PostList>
    </>
  );
}

export default App;
