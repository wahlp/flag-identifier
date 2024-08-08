import { Checkbox } from "@mantine/core";

interface Props {
  setStrictMode(selection: boolean): void;
  strictMode: boolean;
}

export function Filters({
  setStrictMode, 
  strictMode
}: Props) {
    return (
      <>
        <Checkbox
          label="Match selected colours exactly"
          checked={strictMode}
          onChange={(event) => setStrictMode(event.currentTarget.checked)}
          mb={20}
        />
      </>
    )
}