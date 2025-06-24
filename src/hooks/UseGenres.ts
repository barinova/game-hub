import { useQuery } from '@tanstack/react-query';
import { GENRE_KEY } from '@/consts/consts.ts';
import axios from 'axios';
import { apiClient } from '@/services/api-client.ts';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface GenreResponse {
  results: Genre[];
}

const genreFn = async (): Promise<Genre[]> => {
  return apiClient.get<GenreResponse>('/genres').then(res => {
    return res.data?.results || [];
  });
};

export const useGenres = (): { genres; error; isLoading } => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery<Genre[], Error>({
    queryKey: GENRE_KEY,
    queryFn: genreFn,
    staleTime: 1000 * 60 * 10,
  });
  return { genres, error, isLoading };
};
