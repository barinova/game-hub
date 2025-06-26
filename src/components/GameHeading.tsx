import { Heading } from '@chakra-ui/react';
import { usePlatformById } from '@/hooks/usePlatform.ts';

type Props = {
  platformId?: number;
};

export const GameHeading = ({ platformId }: Props) => {
  const { platform } = usePlatformById(platformId);
  const heading = `${platform?.name || ''} ${platform?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={6} fontSize={32}>
      {heading}
    </Heading>
  );
};
