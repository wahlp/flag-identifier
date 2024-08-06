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
    <tr key={item.code}>
      <td>
        <Image 
          src={"/images/" + item.code.toLowerCase() + ".png"} 
          fit="none"
        />
      </td>
      <td>{item.code}</td>
      <td>{item.name}</td>
      <td>{item.colours.join(', ')}</td>
      <td>{item.design.join(', ')}</td>
    </tr>
  ));

  return (
    <Table horizontalSpacing={100}>
      <thead>
        <tr>
          <th>Emoji</th>
          <th>Code</th>
          <th>Full Name</th>
          <th>Colours</th>
          <th>Design</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}