import { ComponentListOptionsPropertyType } from './types';

export const booleanOptions = (): ComponentListOptionsPropertyType => {
  return {
    type: 'boolean',
    options: [true, false],
  };
};

export const selectOptions = (...options: string[]): ComponentListOptionsPropertyType => {
  return {
    type: 'select',
    options,
  };
};
