import { Badge } from '@chakra-ui/react';

type Props = {
  score: number;
};
export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';
  return (
    <Badge fontSize={14} paddingX={2} borderRadius={4} colorScheme={color}>
      {score}
    </Badge>
  );
};
