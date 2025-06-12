import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={8} overflow="hidden">
      {children}
    </Box>
  );
};
