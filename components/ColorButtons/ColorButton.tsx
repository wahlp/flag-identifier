import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function toggleBorder(active: boolean, isWhite: boolean) {
  if (active) {
    return isWhite ? '2px solid #666' : '2px solid #aaa'
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

  const isWhite = name === 'white';

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
      c={isWhite ? '#000' : '#fff'}
      bd={toggleBorder(checked, isWhite)}
    >
      {checked && <CheckIcon style={{ width: rem(24), height: rem(24) }} />}
    </ColorSwatch>
  );
}