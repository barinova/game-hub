import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/random.svg';
import { ColorModeSwitch } from '@/components/ColorModeSwitch.tsx';

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo}></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
