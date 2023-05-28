import { PropertyEditorTypes } from './PropertyEditor.types';
import React, { useState } from 'react';
import { objectEach, objectHasKey, stringSwitch } from '@library/presource';
import { FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material';
import { ComponentListOptionsPropertyType } from '../../../configs/list/types';
import { RendererPropertyType } from '../../Renderer';

/**
 * Designing for Property Editor
 */
export const PropertyEditor: React.FC<PropertyEditorTypes> = ({ properties, options }) => {
  const editors: any[] = [];

  objectEach(properties, ({ key, value }) => {
    if (objectHasKey(options, key)) {
      // Option must have this key, otherwise, there is no control for the property
      const propertyData = options[key];
      editors.push(
        stringSwitch(propertyData.type, {
          // Switch for Boolean
          boolean: () => renderSwitchPropertyEditor(key, propertyData, properties),
          // List of Options to be selected
          select: () => renderSelectPropertyEditor(key, propertyData, properties),
          // Flexible Input to be selected
          input: () => renderInputPropertyEditor(key, propertyData, properties),
        }),
      );
    }
  });

  return (
    <Grid container spacing={2}>
      {editors.map((editor, index) => (
        <Grid key={index} item xs={12}>
          {editor}
        </Grid>
      ))}
    </Grid>
  );
};

const renderSwitchPropertyEditor = (
  label: string,
  option: ComponentListOptionsPropertyType,
  properties: RendererPropertyType,
) => {
  return (
    <FormControl fullWidth>
      <FormControlLabel control={<Switch defaultChecked />} label={label} />
    </FormControl>
  );
};

const renderInputPropertyEditor = (
  key: string,
  propertyConfig: ComponentListOptionsPropertyType,
  properties: RendererPropertyType,
) => {
  return (
    <TextField
      key={key}
      label={key}
      variant={'outlined'}
      fullWidth
      value={properties[key]}
      onChange={({ target: { value } }) => {
        // Updating reactive property
        properties[key] = value;
      }}
    />
  );
};

const renderSelectPropertyEditor = (
  key: string,
  propertyConfig: ComponentListOptionsPropertyType,
  properties: RendererPropertyType,
) => {
  const { options } = propertyConfig;
  // So that itself also get updated
  const [currentValue, setNewValue] = useState<string>(properties[key]);
  return (
    <FormControl fullWidth>
      <InputLabel>{key}</InputLabel>
      <Select
        label={key}
        value={currentValue as any}
        onChange={({ target: { value } }) => {
          // Property is a reactive data, so changing will cause re-rendering
          properties[key] = value;
          setNewValue(value);
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.toString()}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
