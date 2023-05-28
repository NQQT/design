import { storybookSetupTemplate } from '@library/storybook';
import React from 'react';
import { RendererType } from './Renderer.types';
import { Renderer as RendererComponent } from './Renderer';
import { createDataState } from 'assets';
import { PropertyEditor } from '../editor';

const template = storybookSetupTemplate((args) => {
  return <TestGroup />;
});

const props: RendererType = {
  id: 'ToggleButtonGroup',
  props: {
    color: 'primary',
    size: 'small',
    orientation: 'vertical',
    value: 'alignment',
    exclusive: true,
    onChange: () => {
      console.log('on changed');
    },
    'aria-label': 'Platform',
  },
  nested: [
    {
      id: 'ToggleButton',
      props: {
        value: 'web',
        children: 'Web',
      },
    },
    {
      id: 'ToggleButton',
      props: {
        color: 'secondary',
        value: 'android',
        children: 'Android',
      },
    },
    {
      id: 'ToggleButton',
      props: {
        value: 'ios',
        children: 'iOS',
      },
    },
  ],
};

const TestGroup = React.memo(() => {
  return (
    <>
      <RendererComponent
        {...props}
        onSelected={({ properties, options }) => {
          console.log(properties, options);
          reactive.properties = properties;
          reactive.options = options;
        }}
      />
      <Loader />
    </>
  );
});

const reactive = createDataState({
  properties: null,
  options: null,
});
const Loader = () => {
  const { properties, options } = reactive();
  if (!properties || !options) return null;
  return <PropertyEditor properties={properties} options={options} />;
};

export const Renderer = template();

export default {
  title: 'Playground/Template',
};
