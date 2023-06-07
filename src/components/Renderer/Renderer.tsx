import React from 'react';
import { layoutRenderer, rendererPresetMaterialUIComponents } from '@common/assets';

/**
 * This component job is to simply renderer which every component in the json tree using component listing
 */

export const Renderer = layoutRenderer({
  component: {
    list: rendererPresetMaterialUIComponents,
  },
  on: {
    edit: () => {
      console.log('hello');
    },
  },
});
