import type { GameQuery } from '@/App.tsx';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GAME_KEY } from '@/consts/consts.ts';
import type { Platform } from '@/hooks/UsePlatfroms.ts';
import { ApiClient, type FetchResponse } from '@/services/api-client.ts';

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
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [GAME_KEY, gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchTerm,
          page: pageParam,
          page_size: gameQuery.pageSize,
        },
      }),
    initialPageParam: 1,
    staleTime: 1000 * 60 * 10,
    getNextPageParam: (lastPage: FetchResponse<Game>, allPages) => {
      console.log('Last page:', lastPage, 'All pages:', allPages);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

  console.log('Games fetched:', games);
  return {
    games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  };
};
