import { Checkbox } from "@mantine/core";

interface Props {
  setChecked(selection: boolean): void;
  checked: boolean;
}

export function Filters({setChecked, checked}: Props) {
    return (
      <Checkbox
        label="Match selected colours exactly"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
    )
}