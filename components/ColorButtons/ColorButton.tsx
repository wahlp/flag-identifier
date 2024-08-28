import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function toggleBorder(active: boolean) {
  if (active) {
    return '4px solid #666'
  } else {
    return 'none'
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
      radius={checked ? "10%" : "15%"}
      onClick={() => {
        setChecked((c) => !c);
        // store current c
        onClick(name);
      }}  
      c={isWhite ? '#000' : '#fff'}
      bd={toggleBorder(checked)}
      style={{ borderRadius: "15%" }}
    >
      {checked && <CheckIcon style={{ width: rem(24), height: rem(24) }} />}
    </ColorSwatch>
  );
}