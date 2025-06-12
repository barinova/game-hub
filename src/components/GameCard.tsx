import type { Game } from '@/hooks/UseGames.ts';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

type Props = {
  game: Game;
};

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={8} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
