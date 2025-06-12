import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/random.svg';
import { ColorModeSwitch } from '@/components/ColorModeSwitch.tsx';
import { SearchInput } from '@/components/SearchInput.tsx';

export const NavBar = () => {
  return (
    <HStack padding="10px" spacing={4}>
      <Image boxSize="60px" src={logo}></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
