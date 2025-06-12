import { type Genre, useGenres } from '@/hooks/UseGenres.ts';
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { croppedImageUrl } from '@/services/image-utl.ts';

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return <p>Error: {error}</p>;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize={24} paddingBottom={4}>
        Genres
      </Heading>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={8}
                objectFit="cover"
                src={croppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                fontSize="large"
                variant={'link'}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
