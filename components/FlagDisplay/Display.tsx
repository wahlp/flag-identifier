import { Table, Image } from '@mantine/core';
import { useState, useEffect } from 'react';

interface DataItem {
  code: string;
  name: string;
  colours: string[];
}

interface Props {
  selectedColors: string[];
}

export function Display({ selectedColors }: Props) {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data: DataItem[]) => setData(data));
  }, []);
  
  const filteredData = data.filter((item) =>
    selectedColors.every((color) => item.colours.includes(color))
  );

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
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Emoji</th>
          <th>Code</th>
          <th>Full Name</th>
          <th>Colours</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}