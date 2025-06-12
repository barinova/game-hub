import { Grid, GridItem, Show } from '@chakra-ui/react';
import { NavBar } from '@/components/NavBar.tsx';
import { GameGrid } from '@/components/GameGrid.tsx';
import { GenreList } from '@/components/GenreList.tsx';
import { useState } from 'react';
import type { Genre } from '@/hooks/UseGenres.ts';
import { PlatformSelector } from '@/components/PlatformSelector.tsx';
import type { Platform } from '@/hooks/UseGames.ts';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

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
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem
            area="aside"
            display={{ base: 'none', lg: 'block' }}
            paddingX={5}
          >
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={genre => setSelectedGenre(genre)}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={platform => setSelectedPlatform(platform)}
          ></PlatformSelector>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
