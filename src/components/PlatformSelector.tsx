import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { usePlatforms } from '@/hooks/UsePlatfroms.ts';
import type { Platform } from '@/hooks/UseGames.ts';

type Props = {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
};

export const PlatformSelector = ({
  selectedPlatformId,
  onSelectPlatform,
}: Props) => {
  const { platforms, error } = usePlatforms();
  const selectedPlatform = platforms?.find(
    platform => platform.id === selectedPlatformId,
  );

  if (error) return <p>Error</p>;
  return (
    <Menu>
      <MenuList>
        {platforms?.map(platform => (
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
