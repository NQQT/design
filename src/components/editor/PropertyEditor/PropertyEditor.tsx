import { PropertyEditorTypes } from './PropertyEditor.types';
import React from 'react';
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
      {editors.map((Component, index) => (
        <Grid item xs={12}>
          <Component key={index} />
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
  return () => (
    <FormControl fullWidth>
      <FormControlLabel control={<Switch defaultChecked />} label={label} />
    </FormControl>
  );
};

const renderInputPropertyEditor = (
  label: string,
  propertyConfig: ComponentListOptionsPropertyType,
  properties: RendererPropertyType,
) => {
  return () => {
    // Extracting out the value from the property list
    const value = properties[label];
    return (
      <TextField
        label={label}
        variant={'outlined'}
        fullWidth
        value={value}
        onChange={({ target: { defaultValue } }) => {
          // Updating reactive property
          properties[label] = defaultValue;
        }}
      />
    );
  };
};

const renderSelectPropertyEditor = (
  key: string,
  propertyConfig: ComponentListOptionsPropertyType,
  properties: RendererPropertyType,
) => {
  return () => {
    const { options } = propertyConfig;
    const defaultValue = properties[key];
    return (
      <FormControl fullWidth>
        <InputLabel>{key}</InputLabel>
        <Select
          label={key}
          defaultValue={defaultValue}
          onChange={({ target: { value } }) => {
            // Property is a reactive data, so changing will cause re-rendering
            properties[key] = value;
          }}
        >
          {options.map((option) => (
            <MenuItem value={option.toString()}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };
};
