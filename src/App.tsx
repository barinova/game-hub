import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { NavBar } from '@/components/NavBar.tsx';
import { GameGrid } from '@/components/GameGrid.tsx';
import { GenreList } from '@/components/GenreList.tsx';
import { useState } from 'react';
import type { Genre } from '@/hooks/UseGenres.ts';
import { PlatformSelector } from '@/components/PlatformSelector.tsx';
import type { Platform } from '@/hooks/UseGames.ts';
import { SortSelector } from '@/components/SortSelector.tsx';
import { GameHeading } from '@/components/GameHeading.tsx';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearchChanged={text =>
              setGameQuery({
                ...gameQuery,
                searchTerm: text,
              })
            }
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem
            area="aside"
            display={{ base: 'none', lg: 'block' }}
            paddingX={5}
          >
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={10}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex gap={4}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={platform =>
                  setGameQuery({ ...gameQuery, platform })
                }
              ></PlatformSelector>
              <SortSelector
                selectedSort={gameQuery.sortOrder}
                onSelectSort={sortOrder =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
