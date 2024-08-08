import { Checkbox } from "@mantine/core";
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
    return (
      <>
        <Checkbox
          label="Match selected colours exactly"
          checked={strictMode}
          onChange={(event) => setStrictMode(event.currentTarget.checked)}
          mb={20}
        />
        <AdvancedFilters 
        groupHeading='Group1'
        setAdvancedFilters={setAdvancedFilters}
        advancedFilters={advancedFilters}
        data={[
          { id: 'two stripes', name: '2 Stripes' },
          { id: 'three stripes', name: '3 Stripes' },
          { id: 'horizontal stripes', name: 'Horizontal Stripes' },
          { id: 'vertical stripes', name: 'Vertical Stripes' },
          { id: 'diagonal stripes', name: 'Diagonal Stripes' },
        ]}/>
        <AdvancedFilters 
        groupHeading='Group2'
        setAdvancedFilters={setAdvancedFilters}
        advancedFilters={advancedFilters}
        data={[
          { id: 'vertical stripe left', name: 'Left Vertical Stripe' },
          { id: 'triangle left', name: 'Left Triangle' },
        ]}/>
        <AdvancedFilters 
        groupHeading='Group3'
        setAdvancedFilters={setAdvancedFilters}
        advancedFilters={advancedFilters}
        data={[
          { id: 'symbol centered', name: 'Centered Symbol' },
          { id: 'symbol off centered', name: 'Off Centered Symbol' },
          { id: 'symbol top left', name: 'Top Left Symbol' },
          { id: 'union jack', name: 'Union Jack' },
        ]}/>
        <AdvancedFilters 
        groupHeading='Group4'
        setAdvancedFilters={setAdvancedFilters}
        advancedFilters={advancedFilters}
        data={[
          { id: 'cross', name: 'Upright Cross' },
          { id: 'diagonal cross', name: 'Diagonal Cross' },
          { id: 'quarters', name: 'Quarters' },
        ]}/>
        <AdvancedFilters 
        groupHeading='Group5'
        setAdvancedFilters={setAdvancedFilters}
        advancedFilters={advancedFilters}
        data={[
          { id: 'border', name: 'Border' },
          { id: 'solid background', name: 'Solid Background' },
        ]}/>
      </>
    )
}