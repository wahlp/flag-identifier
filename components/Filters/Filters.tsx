import { Checkbox } from "@mantine/core";

interface Props {
  text: string;
  setValue(selection: boolean): void;
  value: boolean;
}

export function Filter({
  text,
  setValue, 
  value
}: Props) {
    return (
      <>
        <Checkbox
          label={text}
          checked={value}
          onChange={(event) => setValue(event.currentTarget.checked)}
          mb={40}
          mt={10}
        />
      </>
    )
}