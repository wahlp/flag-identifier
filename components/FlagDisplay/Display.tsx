import { Table, Image } from '@mantine/core';
import { useState, useEffect } from 'react';

export interface DataItem {
  code: string;
  name: string;
  colours: string[];
  design: string[];
}

interface Props {
  selectedColors: string[];
  strictMode: boolean;
}

export function Display({ selectedColors, strictMode }: Props) {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data: DataItem[]) => {
        data.sort((a, b) => a.code.localeCompare(b.code));
        setData(data)
      });
  }, []);

  const filteredData = data.filter((item) => {
    const hasAllSelectedColors = selectedColors.every((color) =>
      item.colours.includes(color)
    );

    if (strictMode) {
      const hasExactNumberOfColors = item.colours.length === selectedColors.length;
      return hasAllSelectedColors && hasExactNumberOfColors;
    }

    return hasAllSelectedColors;
  });

  const rows = filteredData.map((item) => (
    <Table.Tr key={item.code}>
      <Table.Td>
        <Image 
          src={"/images/" + item.code.toLowerCase() + ".png"} 
          fit="none"
        />
      </Table.Td>
      <Table.Td>{item.code}</Table.Td>
      <Table.Td>{item.name}</Table.Td>
      <Table.Td>{item.colours.join(', ')}</Table.Td>
      <Table.Td>{item.design.join(', ')}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table horizontalSpacing={100} striped withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Emoji</Table.Th>
          <Table.Th>Code</Table.Th>
          <Table.Th>Full Name</Table.Th>
          <Table.Th>Colours</Table.Th>
          <Table.Th>Design</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}