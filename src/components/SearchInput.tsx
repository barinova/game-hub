import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

type Props = {};
export const SearchInput = (props: Props) => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input borderRadius={4} placeholder="Search games..."></Input>
    </InputGroup>
  );
};
