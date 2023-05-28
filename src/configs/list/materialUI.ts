import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
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
  ToggleButtonGroup: {
    component: ToggleButtonGroup,
    properties: {
      disabled: booleanOptions(),
      exclusive: booleanOptions(),
      fullWidth: booleanOptions(),
      orientation: selectOptions('horizontal', 'vertical'),
      color: selectOptions('primary', 'secondary', 'error', 'info', 'success', 'warning'),
      size: selectOptions('small', 'medium', 'large'),
    },
  },
  ToggleButton: {
    component: ToggleButton,
    properties: {
      disabled: booleanOptions(),
      selected: booleanOptions(),
      fullWidth: booleanOptions(),
      color: selectOptions('primary', 'secondary', 'error', 'info', 'success', 'warning'),
      size: selectOptions('small', 'medium', 'large'),
    },
  },
};
