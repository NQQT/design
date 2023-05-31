import { storybookSetupTemplate } from '@library/storybook';
import React, { useState } from 'react';
import { objectObserve } from '@library/presource';
import { RendererEditorProperty, TypeLayoutRendererComponentListProperties } from '../../../../../../common/assets';

const template = storybookSetupTemplate((args) => {
  return <TemplateComponent />;
});

const properties = {
  label: 'hello',
  variant: 'secondary',
};

const TemplateComponent = React.memo(() => {
  const refresh = useState({})[1];
  const props = objectObserve(properties, ({ method }) => {
    if (method === 'set') {
      console.log(properties);
      refresh({});
    }
  });

  const configs: TypeLayoutRendererComponentListProperties = {
    label: {
      type: 'input',
      options: [],
    },
    variant: {
      type: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  };
  return <RendererEditorProperty props={props} configs={configs} />;
});

export const PropertyEditor = template();

export default {
  title: 'Playground/Editor',
};
