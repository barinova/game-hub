import type { GameQuery } from '@/App.tsx';
import { useQuery } from '@tanstack/react-query';
import { GAME_KEY } from '@/consts/consts.ts';
import type { Platform } from '@/hooks/UsePlatfroms.ts';
import { ApiClient } from '@/services/api-client.ts';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const apiClient = new ApiClient<Game>('/games');

export const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useQuery<Game[], Error>({
    queryKey: [GAME_KEY, gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
        },
      }),
    staleTime: 1000 * 60 * 10,
  });

  return { games, error, isLoading };
};
