import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Filters } from '../components/Filters/Filters';
import { AdvancedFilters } from '../components/Filters/AdvancedFilters';
import { Display } from '../components/FlagDisplay/Display';
import { Text, Container, Center, Title } from '@mantine/core';

export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [strictMode, setStrictMode] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<string[]>([]);

  return (
    <>
      <ColorSchemeToggle />

      <Container mt={80} mb={80}>
        <Title ta="center" mb={20}>Flag Identifier</Title>
        <Text ta="center">Find a flag by its colours</Text>
      </Container>

      <Center>
        <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
      </Center>
      <Container>
        <Filters setStrictMode={setStrictMode} strictMode={strictMode} />
        <AdvancedFilters setAdvancedFilters={setAdvancedFilters} advancedFilters={advancedFilters} />
      </Container>
      {/* <Text c="dimmed" ta="center" size="lg" maw={580} mih={60}  mx="auto" mt="xl">
        Current advanced filters: 
        <br />
        {advancedFilters.join(', ')}
      </Text>
      <Text c="dimmed" ta="center" size="lg" maw={580} mih={60}  mx="auto" mt="xl">
        Current colour filters: 
        <br />
        {selectedColors.join(', ')}
      </Text> */}
      <Container mt={40} mb={40} size='xl'>
        <Display selectedColors={selectedColors} strictMode={strictMode} advancedFilters={advancedFilters} />
      </Container>
    </>
  );
}
