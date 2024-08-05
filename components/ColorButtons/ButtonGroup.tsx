import { Group, useMantineTheme } from '@mantine/core';
import { ColorButton } from './ColorButton';

type Props = {
  setSelectedColors(selection: string[]): void;
  selectedColors: string[];
}

export function ButtonGroup({ setSelectedColors, selectedColors }: Props) {
  const handleColorClick = (color: string) => {
    if (selectedColors.includes(color)) {
      // Color is already selected, remove it from the array
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      // Color is not selected, add it to the array
      setSelectedColors([...selectedColors, color]);
    }
  };
  
  const theme = useMantineTheme();
  // const swatches = Object.keys(theme.colors)
  //   .filter((x) => x.length > 0)
  const swatches = [
      ['red', theme.colors.red[8]], 
      ['blue', theme.colors.blue[8]], 
      ['green', theme.colors.green[8]], 
      ['yellow', theme.colors.yellow[8]], 
      ['orange', theme.colors.orange[8]], 
      ['black', theme.colors.dark[8]],
      ['white', theme.colors.gray[0]]
    ]
    .map(([name, color]) => (
      <ColorButton name={name} color={color} onClick={handleColorClick} />
  ));
  
  return (
    <Group position="center" spacing="xs" mb={40}>
      {swatches}
    </Group>
  );
}