import { useQuery } from '@tanstack/react-query';
import { GENRE_KEY } from '@/consts/consts.ts';
import { ApiClient } from '@/services/api-client.ts';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>('/genres');

export const useGenres = (): { genres; error; isLoading } => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery<Genre[], Error>({
    queryKey: GENRE_KEY,
    queryFn: () => apiClient.getAll(),
    staleTime: 1000 * 60 * 10,
  });
  return { genres, error, isLoading };
};
