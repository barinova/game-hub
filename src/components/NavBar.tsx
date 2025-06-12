import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/random.svg';
import { ColorModeSwitch } from '@/components/ColorModeSwitch.tsx';
import { SearchInput } from '@/components/SearchInput.tsx';

interface Prop {
  onSearchChanged: (searchTerm: string) => void;
}
export const NavBar = ({ onSearchChanged }: Prop) => {
  return (
    <HStack padding="10px" spacing={4}>
      <Image boxSize="60px" src={logo}></Image>
      <SearchInput
        onSearchChanged={text => onSearchChanged(text)}
      ></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};
