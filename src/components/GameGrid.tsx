import { useGames } from '@/hooks/UseGames';
import { SimpleGrid } from '@chakra-ui/react';
import { GameCard } from '@/components/GameCard.tsx';
import { GameCardSkeleton } from '@/components/GameCardSkeleton.tsx';
import { GameCardContainer } from '@/components/GameCardContainer.tsx';

export const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons: number[] = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <>
      {error && <p>Error: {error}</p>}
      <SimpleGrid
        padding={10}
        spacing={4}
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
    </>
  );
};
