import { useGenres } from '@/hooks/UseGenres.ts';
import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import { croppedImageUrl } from '@/services/image-utl.ts';

export const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return <p>Error: {error}</p>;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={8}
              src={croppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
