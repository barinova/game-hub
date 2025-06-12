import type { Game } from '@/hooks/UseGames.ts';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { PlatformIconList } from '@/components/PlatformIconList.tsx';
import { CriticScore } from '@/components/CriticScore.tsx';
import { croppedImageUrl } from '@/services/image-utl.ts';

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={'hidden'}>
      <Image src={croppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};
