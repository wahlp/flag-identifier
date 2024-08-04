import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Display } from '../components/FlagDisplay/Display';
import { Text, Container } from '@mantine/core';


export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  return (
    <>
      {/* <Welcome /> */}
      <ColorSchemeToggle />
      <br />
      <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
      <Text color="dimmed" align="center" size="lg" maw={580} mih={60}  mx="auto" mt="xl">
        Current filters: 
        <br />
        {selectedColors.join(', ')}
      </Text>
      <Container mt={40}>
        <Display selectedColors={selectedColors} />
      </Container>
    </>
  );
}
