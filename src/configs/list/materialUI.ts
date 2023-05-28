import { Button } from '@mui/material';
import { ComponentListType } from './types';
import { booleanOptions, selectOptions } from './options';

export const materialUIComponentList: ComponentListType = {
  Button: {
    component: Button,
    properties: {
      variant: selectOptions('text', 'outlined', 'filled', 'filledTonal', 'elevated'),
      color: selectOptions('primary', 'secondary', 'tertiary'),
      size: selectOptions('small', 'medium', 'large'),
      disabled: booleanOptions(),
    },
  },
};
