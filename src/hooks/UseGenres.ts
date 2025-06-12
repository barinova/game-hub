import { useData } from '@/hooks/UseData.ts';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => useData<Genre>('/genres');
