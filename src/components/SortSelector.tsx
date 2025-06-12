import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiSolidChevronDown } from 'react-icons/bi';

type Props = {
  selectedSort: string | null;
  onSelectSort: (order: string) => void;
};

export const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
  const sortOrders = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-released',
      label: 'Released',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];
  return (
    <Menu>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem key={order.value} onClick={() => onSelectSort(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
      <MenuButton
        as={Button}
        rightIcon={<BiSolidChevronDown></BiSolidChevronDown>}
      >
        {'Sort by: '}
        {sortOrders.find(order => order.value === selectedSort)?.label ||
          'Relevance'}
      </MenuButton>
    </Menu>
  );
};
