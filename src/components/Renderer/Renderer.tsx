import React from 'react';
import { materialUIComponentList } from '../../configs/list';
import { layoutRenderer } from 'assets';

/**
 * This component job is to simply renderer which every component in the json tree using component listing
 */

export const Renderer = layoutRenderer({
  component: {
    list: materialUIComponentList,
  },
  on: {
    edit: () => {
      // Do nothing for now
    },
  },
});
