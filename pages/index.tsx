import { useState } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { ButtonGroup } from '../components/ColorButtons/ButtonGroup';
import { Display } from '../components/FlagDisplay/Display';
import { Text, Container, Checkbox } from '@mantine/core';


export default function HomePage() {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  return (
    <>
      {/* <Welcome /> */}
      <ColorSchemeToggle />
      <br />
      <ButtonGroup setSelectedColors={setSelectedColors} selectedColors={selectedColors} />
      
      <Checkbox
        label="Match selected colours exactly"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <Text color="dimmed" align="center" size="lg" maw={580} mih={60}  mx="auto" mt="xl">
        Current filters: 
        <br />
        {selectedColors.join(', ')}
      </Text>
      <Container mt={40}>
        <Display selectedColors={selectedColors} strictMode={checked} />
      </Container>
    </>
  );
}
