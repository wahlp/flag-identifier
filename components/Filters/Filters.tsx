import { Checkbox } from "@mantine/core";
import { AdvancedFilters } from "./AdvancedFilters";

  

interface Props {
  setChecked(selection: boolean): void;
  checked: boolean;
}

export function Filters({setChecked, checked}: Props) {
    return (
      <>
        <Checkbox
          label="Match selected colours exactly"
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
          mb={20}
        />
        {/* <AdvancedFilters data={[
          { position: 6, name: 'Carbon' },
          { position: 7, name: 'Nitrogen' },
          { position: 39, name: 'Yttrium' },
        ]}/>
        <AdvancedFilters data={[
          { position: 56, name: 'Barium' },
          { position: 58, name: 'Cerium' },
        ]}/> */}
      </>
    )
}