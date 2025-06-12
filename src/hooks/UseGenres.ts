import { allGenres } from '@/data/genres.ts';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// export const useGenres = () => useData<Genre>('/genres');

export const useGenres = () => ({
  data: allGenres,
  isLoading: false,
  error: null,
});
