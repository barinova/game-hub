import type { Game } from '@/hooks/UseGames.ts';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { PlatformIconList } from '@/components/PlatformIconList.tsx';
import { CriticScore } from '@/components/CriticScore.tsx';
import { croppedImageUrl } from '@/services/image-utl.ts';
import { Emoji } from '@/components/Emoji.tsx';

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={croppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconList
            platforms={game?.parent_platforms?.map(p => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>

        <Heading fontSize={24}>{game.name}</Heading>

        {game.rating_top && <Emoji rating={game.rating_top}></Emoji>}
      </CardBody>
    </Card>
  );
};
