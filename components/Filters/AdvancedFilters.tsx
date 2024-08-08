import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

interface Item {
  position: number;
  name: string;
}

interface Props {
  data: Item[];
}

export function AdvancedFilters({ data }: Props) {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = data.map((item) => (
    <Table.Tr
      key={item.name}
      bg={selectedRows.includes(item.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(item.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, item.position]
                : selectedRows.filter((position) => position !== item.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{item.name}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table w={240}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element name</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}