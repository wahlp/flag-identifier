import { useState } from 'react';
import { ColorSwatch, Group, CheckIcon, rem } from '@mantine/core';

function toggleBorder(active: boolean) {
  if (active) {
    return '2px solid #aaa'
  } else {
    return ''
  }
}

type Props = {
  name: string;
  color: string;
  onClick(color: string): void;
}

export function ColorButton({ name, color, onClick }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <ColorSwatch
      component="button"
      color={color}
      key={name}
      size={64}
      radius="md"
      onClick={() => {
        setChecked((c) => !c);
        // store current c
        onClick(name);
      }}
      sx={{ color: '#fff', border: toggleBorder(checked), cursor: 'pointer' }}
    >
      {checked && <CheckIcon width={rem(10)} />}
    </ColorSwatch>
  );
}