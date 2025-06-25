import { apiClient, type FetchResponse } from '@/services/api-client.ts';
import { useQuery } from '@tanstack/react-query';
import { PLATFORM_KEY } from '@/consts/consts.ts';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platformsFn = async (): Promise<Platform[]> => {
  return apiClient
    .get<FetchResponse<Platform>>('platforms/lists/parents')
    .then(res => res.data?.results || []);
};

export const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery<Platform[]>({
    queryKey: PLATFORM_KEY,
    queryFn: platformsFn,
    staleTime: 1000 * 60 * 10,
  });

  return { platforms, error, isLoading };
};
// export const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
