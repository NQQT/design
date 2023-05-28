import { ComponentListOptionsPropertyType } from '../../../configs/list/types';
import { RendererPropertyType } from '../../Renderer';

export type PropertyEditorTypes = {
  properties: RendererPropertyType;
  // Options for the property
  options: { [key: string]: ComponentListOptionsPropertyType };
};
