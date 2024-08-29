import { useState } from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Filter } from '../components/Filters/Filters';
import { AdvancedFilters } from '../components/Filters/AdvancedFilters';
import { Display } from '../components/FlagDisplay/Display';
import { Text, Container, Title, Stack, Paper, Anchor, Accordion, Center } from '@mantine/core';

export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [strictMode, setStrictMode] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<string[]>([]);
  const [showAllData, setShowAllData] = useState(false);

  return (
    <>
      <Container size='xl' mt={80} mb={80}>
        <ColorSchemeToggle />
        <Title ta="center" mt={20} mb={20}>Flag Identifier</Title>
        <Text ta="center">Identify a flag emoji by its colours</Text>
        <Text ta="center">Flag assets from{' '}
          <Anchor href="https://github.com/jdecked/twemoji" target="_blank">twemoji</Anchor>
        </Text>
      </Container>

      <Container size='xl'>
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <Accordion multiple defaultValue={["colour"]}>
            <Accordion.Item value="colour">
              <Accordion.Control>
                <Center>
                  <Title order={3}>Colour Filter</Title>
                </Center> 
              </Accordion.Control>
              <Accordion.Panel>
                <Stack align="center" justify="center">
                  <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
                  <Filter text="Match selected colours exactly" setValue={setStrictMode} value={strictMode} />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="advanced">
              <Accordion.Control>
                  <Center>
                    <Title order={3}>Pattern Filters</Title>
                  </Center> 
                </Accordion.Control>
              <Accordion.Panel>
                <AdvancedFilters setAdvancedFilters={setAdvancedFilters} advancedFilters={advancedFilters} />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          
        </Paper>
      </Container>

      <Container mt={40} mb={80} size='xl'>
        <Paper shadow="sm" radius="md" withBorder p="xl">
          <Stack align="center" justify="center">
            <Title order={3}>Matches</Title>
            <Filter text="Show full details for each item" setValue={setShowAllData} value={showAllData} />
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
