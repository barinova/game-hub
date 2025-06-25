import type { GameQuery } from '@/App.tsx';
import { useQuery } from '@tanstack/react-query';
import { apiClient, type FetchResponse } from '@/services/api-client.ts';
import { GAME_KEY } from '@/consts/consts.ts';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const gamesFn = async (gameQuery: GameQuery): Promise<Game[]> => {
  return apiClient
    .get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTerm,
      },
    })
    .then(res => res.data?.results || []);
};

export const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useQuery<Game[], Error>({
    queryKey: [GAME_KEY, gameQuery],

    queryFn: () => gamesFn(gameQuery),
    staleTime: 1000 * 60 * 10,
  });

  return { games, error, isLoading };
};
