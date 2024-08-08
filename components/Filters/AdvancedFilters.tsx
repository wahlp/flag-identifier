import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

interface Item {
  id: string;
  name: string;
}

interface Props {
  data: Item[];
  groupHeading: string;
  setAdvancedFilters(selection: string[]): void;
  advancedFilters: string[];
}

export function AdvancedFilters({ 
  data,
  groupHeading: tableHeading,
  setAdvancedFilters,
  advancedFilters,
}: Props) {

  const rows = data.map((item) => (
    <Table.Tr
      key={item.name}
      bg={advancedFilters.includes(item.id) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={advancedFilters.includes(item.id)}
          onChange={(event) => {
              console.log(item.id)
              setAdvancedFilters(
                event.currentTarget.checked
                  ? [...advancedFilters, item.id]
                  : advancedFilters.filter((position) => position !== item.id)
              )
            }
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
          <Table.Th>{tableHeading}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}