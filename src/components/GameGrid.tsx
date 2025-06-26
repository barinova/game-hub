import { useGames } from '@/hooks/UseGames';
import { Button, SimpleGrid, Text } from '@chakra-ui/react';
import { GameCard } from '@/components/GameCard.tsx';
import { GameCardSkeleton } from '@/components/GameCardSkeleton.tsx';
import { GameCardContainer } from '@/components/GameCardContainer.tsx';
import type { GameQuery } from '@/App.tsx';
import { Fragment } from 'react';

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(gameQuery);
  const skeletons: number[] = Array.from({ length: 6 }, (_, i) => i + 1);

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <>
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
        {games?.pages?.map((page, index) => (
          <Fragment key={index}>
            {page?.results?.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
      <Button
        className="btn btn-primary"
        marginLeft={10}
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : 'Load More Games'}
      </Button>
    </>
  );
};
