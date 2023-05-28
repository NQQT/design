import { storybookSetupTemplate } from '@library/storybook';
import React, { useState } from 'react';
import { PropertyEditor as PropertyEditorComponent } from './PropertyEditor';
import { ComponentListOptionsPropertyType } from '../../../configs/list/types';
import { objectObserve } from '@library/presource';

const template = storybookSetupTemplate((args) => {
  return <TemplateComponent />;
});

const properties = {
  label: 'hello',
  variant: 'secondary',
};
const TemplateComponent = React.memo(() => {
  const refresh = useState({})[1];
  const reactiveProperties = objectObserve(properties, ({ method }) => {
    if (method === 'set') {
      console.log(properties);
      refresh({});
    }
  });

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
  return <PropertyEditorComponent properties={reactiveProperties} options={options} />;
});

export const PropertyEditor = template();

export default {
  title: 'Playground/Editor',
};
