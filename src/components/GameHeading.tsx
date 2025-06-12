import { Heading } from '@chakra-ui/react';
import type { GameQuery } from '@/App.tsx';

type Props = {
  gameQuery: GameQuery;
};

export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  return (
    <Heading as="h1" marginY={6} fontSize={32}>
      {heading}
    </Heading>
  );
};
