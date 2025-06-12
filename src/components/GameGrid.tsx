import { UseGames } from '@/hooks/UseGames';
import { SimpleGrid } from '@chakra-ui/react';
import { GameCard } from '@/components/GameCard.tsx';

export const GameGrid = () => {
  const { games, error } = UseGames();

  return (
    <>
      {error && <p>Error: {error}</p>}
      <SimpleGrid
        padding={10}
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      >
        {games?.map(game => (
          <GameCard key={game.id} game={game}>
            {game.name}
          </GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
