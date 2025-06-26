import { Heading } from '@chakra-ui/react';
import { type Genre, useGenres } from '@/hooks/UseGenres.ts';

type Props = {
  genreId?: number;
};

export const GameHeading = ({ genreId }: Props) => {
  const { genres } = useGenres();
  const genre = genres?.results?.find((genre: Genre) => genre.id === genreId);
  const heading = `${genre?.platform?.name || ''} ${genre?.genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={6} fontSize={32}>
      {heading}
    </Heading>
  );
};
