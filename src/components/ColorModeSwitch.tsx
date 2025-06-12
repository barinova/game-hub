import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode('dark');
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};
