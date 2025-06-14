import { useGames } from '@/hooks/UseGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameCard } from '@/components/GameCard.tsx';
import { GameCardSkeleton } from '@/components/GameCardSkeleton.tsx';
import { GameCardContainer } from '@/components/GameCardContainer.tsx';
import type { GameQuery } from '@/App.tsx';

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons: number[] = Array.from({ length: 6 }, (_, i) => i + 1);

  if (error) return <Text>Error</Text>;

  return (
    <SimpleGrid
      padding={10}
      spacing={6}
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
    >
      {isLoading &&
        skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {data?.map(game => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
