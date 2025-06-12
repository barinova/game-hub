import { useData } from '@/hooks/UseData.ts';

export interface Genre {
  id: number;
  name: string;
}

export const useGenres = () => useData<Genre>('/geners');
