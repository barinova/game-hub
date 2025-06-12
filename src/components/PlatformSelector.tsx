import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { usePlatforms } from '@/hooks/UsePlatfroms.ts';
import type { Platform } from '@/hooks/UseGames.ts';

type Props = {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
};

export const PlatformSelector = ({
  selectedPlatform,
  onSelectPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return <p>Error</p>;
  return (
    <Menu>
      <MenuList>
        {data.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
      <MenuButton
        as={Button}
        rightIcon={<BiSolidChevronDown></BiSolidChevronDown>}
      >
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
    </Menu>
  );
};
