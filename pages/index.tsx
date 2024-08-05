import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Filters } from '../components/Filters/Filters';
import { Display } from '../components/FlagDisplay/Display';
import { Text, Container, Center } from '@mantine/core';


export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* <Welcome /> */}
      <ColorSchemeToggle />
      <br />
      <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
      <Center>
        <Filters setChecked={setChecked} checked={checked} />
      </Center>
      <Text color="dimmed" align="center" size="lg" maw={580} mih={60}  mx="auto" mt="xl">
        Current colour filters: 
        <br />
        {selectedColors.join(', ')}
      </Text>
      <Container mt={40}>
        <Display selectedColors={selectedColors} strictMode={checked} />
      </Container>
    </>
  );
}
