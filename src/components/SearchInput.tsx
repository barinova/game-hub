import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';

type Props = {
  onSearchChanged: (searchTerm: string) => void;
};

export const SearchInput = ({ onSearchChanged }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        if (!ref.current) {
          return;
        }

        onSearchChanged(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input ref={ref} borderRadius={4} placeholder="Search games..."></Input>
      </InputGroup>
    </form>
  );
};
