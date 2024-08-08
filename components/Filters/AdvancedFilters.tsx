import { Table, Checkbox, Flex } from '@mantine/core';

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

function AdvancedFilter({ 
  data,
  groupHeading,
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
          <Table.Th>{groupHeading}</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

interface IncomingProps {
  setAdvancedFilters(selection: string[]): void;
  advancedFilters: string[];
}

export function AdvancedFilters({ 
  setAdvancedFilters,
  advancedFilters,
}: IncomingProps) {
  const advancedFiltersElements = [
    {
      name: 'Stripes',
      items: [
        { id: 'two stripes', name: '2 Stripes' },
        { id: 'three stripes', name: '3 Stripes' },
        { id: 'horizontal stripes', name: 'Horizontal Stripes' },
        { id: 'vertical stripes', name: 'Vertical Stripes' },
        { id: 'diagonal stripes', name: 'Diagonal Stripes' },
      ]
    }, {
      name: 'Left Side Elements',
      items: [
        { id: 'vertical stripe left', name: 'Left Vertical Stripe' },
        { id: 'triangle left', name: 'Left Triangle' },
      ]
    },{
      name: 'Symbol',
      items: [
        { id: 'symbol centered', name: 'Centered Symbol' },
        { id: 'symbol off centered', name: 'Off Centered Symbol' },
        { id: 'symbol top left', name: 'Top Left Symbol' },
        { id: 'union jack', name: 'Union Jack' },
      ]
    },{
      name: '4-Way Division',
      items: [
        { id: 'cross', name: 'Upright Cross' },
        { id: 'diagonal cross', name: 'Diagonal Cross' },
        { id: 'quarters', name: 'Quarters' },
      ]
    },{
      name: 'General',
      items: [
        { id: 'border', name: 'Border' },
        { id: 'solid background', name: 'Solid Background' },
      ]
    },
  ].map((group) => (
    <AdvancedFilter 
      groupHeading={group.name}
      setAdvancedFilters={setAdvancedFilters}
      advancedFilters={advancedFilters}
      data={group.items}
    />
  ))

  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      {advancedFiltersElements}
    </Flex>
  )
}