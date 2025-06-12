import { Grid, GridItem, Show } from '@chakra-ui/react';
import { NavBar } from '@/components/NavBar.tsx';
import { GameGrid } from '@/components/GameGrid.tsx';
import { GenreList } from '@/components/GenreList.tsx';
import { useState } from 'react';
import type { Genre } from '@/hooks/UseGenres.ts';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
