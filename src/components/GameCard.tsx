import type { Game } from '@/hooks/UseGames.ts';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { PlatformIconList } from '@/components/PlatformIconList.tsx';

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};
