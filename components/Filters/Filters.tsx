import { Checkbox, Flex } from "@mantine/core";
import { AdvancedFilters } from "./AdvancedFilters";

interface Props {
  setStrictMode(selection: boolean): void;
  strictMode: boolean;
  setAdvancedFilters(selection: string[]): void;
  advancedFilters: string[];
}

export function Filters({
  setStrictMode, 
  strictMode,
  setAdvancedFilters,
  advancedFilters,
}: Props) {
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
    <AdvancedFilters 
      groupHeading={group.name}
      setAdvancedFilters={setAdvancedFilters}
      advancedFilters={advancedFilters}
      data={group.items}
    />
  ))
    return (
      <>
        <Checkbox
          label="Match selected colours exactly"
          checked={strictMode}
          onChange={(event) => setStrictMode(event.currentTarget.checked)}
          mb={20}
        />
        <Flex>
          {advancedFiltersElements}
        </Flex>
      </>
    )
}