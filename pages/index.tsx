import { useState } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Filter } from '../components/Filters/Filters';
import { AdvancedFilters } from '../components/Filters/AdvancedFilters';
import { Display } from '../components/FlagDisplay/Display';
import { Text, Container, Title, Stack, Paper, Anchor } from '@mantine/core';

export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [strictMode, setStrictMode] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<string[]>([]);
  const [showAllData, setShowAllData] = useState(false);

  return (
    <>
      {/* <ColorSchemeToggle /> */}

      <Container mt={80} mb={80}>
        <Title ta="center" mb={20}>Flag Identifier</Title>
        <Text ta="center">Identify a flag emoji by its colours</Text>
        <Text ta="center">Flag assets from{' '}
          <Anchor href="https://github.com/jdecked/twemoji" target="_blank">twemoji</Anchor>
        </Text>
      </Container>

      <Container size='xl'>
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <Stack align="center" justify="center">
            <Title order={3}>Colour Filter</Title>
            <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
            <Filter text="Match selected colours exactly" setValue={setStrictMode} value={strictMode} />
            <Title order={3}>Advanced Filters</Title>
            <AdvancedFilters setAdvancedFilters={setAdvancedFilters} advancedFilters={advancedFilters} />
          </Stack>
        </Paper>
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
        <Container mt={80} mb={80} size='xl'>
          <Paper shadow="sm" radius="md" withBorder p="xl">
            <Stack align="center" justify="center">
              <Title order={3}>Matches</Title>
              <Filter text="Show all data" setValue={setShowAllData} value={showAllData} />
              <Display 
                selectedColors={selectedColors} 
                strictMode={strictMode} 
                advancedFilters={advancedFilters}
                showAllData={showAllData} 
              />
            </Stack>
          </Paper>
        </Container>
    </>
  );
}
