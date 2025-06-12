import { UseGames } from '@/hooks/UseGames';
import { SimpleGrid } from '@chakra-ui/react';
import { GameCard } from '@/components/GameCard.tsx';
import { GameCardSkeleton } from '@/components/GameCardSkeleton.tsx';

export const GameGrid = () => {
  const { games, error, isLoading } = UseGames();
  const skeletons = Array.from({ length: 10 });

  return (
    <>
      {error && <p>Error: {error}</p>}
      <SimpleGrid
        padding={10}
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {games?.map(game => <GameCard key={game.id} game={game}></GameCard>)}
      </SimpleGrid>
    </>
  );
};
