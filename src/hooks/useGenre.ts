import { type Genre, useGenres } from '@/hooks/UseGenres.ts';

export const useGenre = (id?: number) => {
  const { genres } = useGenres();
  return {
    genre: genres?.find((genre: Genre) => genre.id === id),
  };
};
