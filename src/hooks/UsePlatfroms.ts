import { ApiClient } from '@/services/api-client.ts';
import { useQuery } from '@tanstack/react-query';
import { PLATFORM_KEY } from '@/consts/consts.ts';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>('platforms/lists/parents');

export const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isLoading,
  } = useQuery<Platform[]>({
    queryKey: PLATFORM_KEY,
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 10,
  });

  return { platforms, error, isLoading };
};
