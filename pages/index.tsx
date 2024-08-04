import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Text } from '@mantine/core';


export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <br />
      <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        The current color(s) are: 
        <br />
        {selectedColors.join(', ')}
      </Text>
    </>
  );
}
