import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { PropertyEditor as PropertyEditorComponent } from './PropertyEditor';
import { ComponentListOptionsPropertyType } from '../../../configs/list/types';

const template = storybookSetupTemplate((args) => {
  return <TemplateComponent />;
});

const TemplateComponent = React.memo(() => {
  const properties = {
    label: 'hello',
    variant: 'secondary',
  };

  const options: { [key: string]: ComponentListOptionsPropertyType } = {
    label: {
      type: 'input',
      options: [],
    },
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  };
  return <PropertyEditorComponent properties={properties} options={options} />;
});

export const PropertyEditor = template();

export default {
  title: 'Playground/Editor',
};
