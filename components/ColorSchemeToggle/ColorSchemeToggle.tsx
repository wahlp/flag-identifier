import { Button, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button size="sm" variant="default" onClick={toggleColorScheme}>
      {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}
    </Button>
  )
}