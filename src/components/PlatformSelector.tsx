import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiSolidChevronDown } from 'react-icons/bi';
import { type Platform, usePlatforms } from '@/hooks/UsePlatfroms.ts';
import { usePlatformById } from '@/hooks/usePlatform.ts';

type Props = {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
};

export const PlatformSelector = ({
  selectedPlatformId,
  onSelectPlatform,
}: Props) => {
  const { platforms, error } = usePlatforms();
  const { platform } = usePlatformById(selectedPlatformId);

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
        {platform?.name || 'Platforms'}
      </MenuButton>
    </Menu>
  );
};
